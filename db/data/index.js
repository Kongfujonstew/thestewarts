import { anyone, person, admin } from '../../db';

export const loadPublicData = async(...args) => {
  const [ quotes ] = await anyone.getAllQuotes(...args);
  const [ blogs ] = await anyone.getAllBlogs(...args);
  const [ songs ] = await anyone.getAllSongs(...args);
  const [ locations ] = await anyone.getAllLocations(...args);
  return {
    songs: songs || [],
    blogs: blogs || [],
    quotes: quotes || [],
    locations: locations || []
  }
};

export const loadPersonDataById = async(...args) => {
  const [, ...lastArgs] = args;
  const [[ address={} ]] = await person.getAddressByPersonId(...args);
  const [[ personData ]] = await person.getPersonById(...args);
  const [ eventsWithAttendance ] = await person.getAttendanceByPersonId(...args);
  const [ mygroups ] = await person.getGroupsByPersonId(...args);
  const groups = [];
  await Promise.all(mygroups.map((group) => {
    return new Promise((resolve, reject) => {
      person.getGroupMembersByGroupId({ id: group.id }, ...lastArgs).then(([ members ]) => {
        groups.push(Object.assign(group, { members: members }));
        resolve();
      });
    })
  })).then(() => console.log('getting members complete'))
  const [ quotes ] = await person.getQuotesByPersonId(...args);
  const [ songs ] = await anyone.getAllSongs(...args);
  const [ lists ] = await person.getListsByPersonId(...args);

  return {
    address: address || [],
    person: personData,
    events: eventsWithAttendance || [],
    groups: groups || [],
    lists: lists || [],
    quotes: quotes || [],
    songs: songs || []
  };
};

export const loadAdminData = async(...args) => {
  const [, ...lastArgs] = args;
  const [ allevents ] = await person.getAllEvents(...args);
  const [ people ] = await admin.getAllPeople(...args);
  const events = [];
  await Promise.all(allevents.map((event) => {
    return new Promise((resolve, reject) => {
      person.getAttendanceByEventId({ id: event.id }, ...lastArgs).then(([ attendees ]) => {
        events.push(Object.assign(event, { attendees: attendees }));
        resolve();
      });
    })
  })).then(() => console.log('getting event attendance complete'));

  // This is copied from loadPublicData above
  const [ allgroups ] = await person.getAllGroups(...args);
  const groups = [];
  await Promise.all(allgroups.map((group) => {
    return new Promise((resolve, reject) => {
      person.getGroupMembersByGroupId({ id: group.id }, ...lastArgs).then(([ members ]) => {
        groups.push(Object.assign(group, { members: members }));
        resolve();
      });
    })
  })).then(() => console.log('getting group members complete'));

  const [ locations ] = await anyone.getAllLocations(...args);
  const [ allquotes ] = await anyone.getAllQuotes(...args);

  const quotes = [];
  await Promise.all(allquotes.map((quote) => {
    return new Promise((resolve, reject) => {
      person.getQuoteMembersByQuoteId({ id: quote.id }, ...lastArgs).then(([ members ]) => {
        quotes.push(Object.assign(quote, { members: members }));
        resolve();
      });
    })
  })).then(() => console.log('getting quote members complete'));

  const [ songs ] = await anyone.getAllSongs(...args);
  const [ blogs ] = await anyone.getAllBlogs(...args);
  const [ alllists ] = await admin.getAllLists(...args);

  const lists = [];
  await Promise.all(alllists.map((list) => {
    return new Promise((resolve, reject) => {
      admin.getListMembersByListId({ id: list.id }, ...lastArgs).then(([ members ]) => {
        lists.push(Object.assign(list, { members: members }));
        resolve();
      });
    })
  })).then(() => console.log('getting list members complete'));

  return {
    people,
    events,
    groups,
    locations,
    quotes,
    blogs,
    songs,
    lists
  };
};
