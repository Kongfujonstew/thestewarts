import { makeValues, makeColumns, makeSet } from '../helpers/querystring';

export default {
  getAddressById: ({ id }) => `SELECT * FROM address WHERE id=${id};`,
  getAddressByPersonId: ({ id }) => `SELECT * FROM address WHERE id=(SELECT address_id FROM person WHERE id=${id});`,
  getPersonById: ({ id }) => `SELECT id, email, firstname, lastname, phone, food, notes, preferences, address_id, settings FROM person WHERE id=${id}`,
  associateAddressToPerson: ({ id, personId }) => `UPDATE person SET address_id=(SELECT id FROM address WHERE id=${id}) WHERE id=${personId} RETURNING *;`,
  createGroup: ({ group }) => `INSERT INTO groupo (${makeColumns(group)}) VALUES (${makeValues(group)}) RETURNING *;`,
  addToGroupByPersonId: ({ id, personId }) => `INSERT INTO groupomember (person_id, groupo_id) VALUES (${personId}, (SELECT id from groupo WHERE id=${id})) RETURNING *;`,
  getGroupsByPersonId: ({ id }) => `SELECT g.id, g.name, g.parent_id, g.notes, g.preferences, g.settings FROM groupo g JOIN groupomember m ON g.id=m.groupo_id WHERE m.person_id=${id};`,
  getGroupMembersByGroupId: ({ id }) => `SELECT p.id, p.email, p.firstname, p.lastname, p.phone, p.food, p.address_id, p.preferences, p.notes, p.settings FROM person p JOIN groupomember m ON p.id=m.person_id WHERE m.groupo_id=${id};`,
  getAllGroups: () => `SELECT * FROM groupo;`,
  removeFromGroupByPersonId: ({ id, personId} ) => `DELETE FROM groupomember m WHERE person_id=${personId} AND groupo_id=${id} RETURNING *;`,
  updateAttendance: ({ attendance }) => `UPDATE attendance SET ${makeSet(attendance)} WHERE event_id=${attendance.event_id} AND person_id=${attendance.person_id} RETURNING *;`,
  getAttendanceByPersonId: ({ id }) => `SELECT a.event_id, a.invitation_sent, a.rsvpd, a.rsvpyes, a.preferences, e.settings, e.notes, e.id, e.name, e.time, e.send_invitations, d.address1, d.address2, d.city, d.state, d.zip, d.country, a.id person_id FROM attendance a JOIN event e ON (e.id=a.event_id AND a.person_id=${id}) JOIN address d ON (e.address_id = d.id);`,
  getAttendanceByEventId: ({ id }) => `SELECT a.event_id, a.person_id, p.id, p.email, p.firstname, p.lastname, a.notes, a.invitation_sent, a.rsvpd, a.preferences, a.settings FROM attendance a JOIN person p ON a.person_id=p.id WHERE a.event_id=${id};`,
  getAllEvents: () => `SELECT id, name, time, address_id, send_invitations, notes, settings FROM event;`,
  createEvent: ({ event }) => `INSERT INTO event (${makeColumns(event)}) VALUES (${makeValues(event)}) RETURNING *;`,
  createQuote: ({ quote }) => `INSERT INTO quote (${makeColumns(quote)}) VALUES (${makeValues(quote)}) RETURNING *;`,
  getQuotesByPersonId: ({ id }) => `SELECT q.id, q.text, q.author FROM quote q JOIN quotemember m ON q.id=m.quote_id WHERE m.person_id=${id};`,
  getListsByPersonId: ({ id }) => `SELECT l.id, l.name, l.settings FROM list l JOIN listmember m ON l.id=m.list_id WHERE m.person_id=${id};`,
  addToQuoteByPersonId: ({ id, personId }) => `INSERT INTO quotemember (person_id, quote_id) VALUES(${personId}, ${id}) RETURNING *`,
  getQuoteMembersByQuoteId: ({ id }) => `SELECT p.id, p.email, p.firstname, p.lastname, m.quote_id FROM person p JOIN quotemember m ON p.id=m.person_id WHERE m.quote_id=${id};`,
  updateGroupById: ({ id, group }) => `UPDATE groupo SET ${makeSet(group)} WHERE id=${id} RETURNING *;`
};
