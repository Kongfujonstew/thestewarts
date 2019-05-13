import { sequelize } from '../../db';
const { keys, values } = Object;
import { anyone, person, admin } from '../../db';

export default {
  //anyone

  //Sanity test
  hello: async() => {
    const [[a]] = await sequelize.query(`SELECT * FROM songs`);
    return 'Hello!';
  },

  createAddress: async(...args) => {
    const [[ address ]] = await anyone.createAddress(...args);
    return address || 'forcegraphqlerror';
  },

  createPerson: async(...args) => {
    const [[ person ]]  = await anyone.createPerson(...args);
    return person || 'forcegraphqlerror';
  },

  getLocationById: async(...args) => {
    const [[ location ]] = await anyone.getLocationById(...args);
    return location || 'forcegraphqlerror';
  },

  getAllLocations: async(...args) => {
    const [ locations ] = await anyone.getAllLocations(...args);
    return locations || 'forcegraphqlerror';
  },

  getQuoteById: async(...args) => {
    const [[ quote ]] = await anyone.getQuoteById(...args);
    return quote || 'forcegraphqlerror';
  },

  getAllQuotes: async(...args) => {
    const [ quotes ] = await anyone.getAllQuotes(...args);
    return quotes || 'forcegraphqlerror';
  },

  getBlogById: async(...args) => {
    const [[ blog ]] = await anyone.getBlogById(...args);
    return blog || 'forcegraphqlerror';
  },

  getAllBlogs: async(...args) => {
    const [ blogs ] = await anyone.getAllQuotes(...args);
    return blogs || 'forcegraphqlerror';
  },

  getSongById: async(...args) => {
    const [[ song ]] = await anyone.getBlogById(...args);
    return song || 'forcegraphqlerror';
  },

  getAllSongs: async(...args) => {
    const [ songs ] = await anyone.getAllQuotes(...args);
    return songs || 'forcegraphqlerror';
  },

  loadPublicData: async(...args) => {
    const [ quotes ] = await anyone.getAllQuotes(...args);
    const [ blogs ] = await anyone.getAllBlogs(...args);
    const [ songs ] = await anyone.getAllSongs(...args);
    return {
      songs: songs || [],
      blogs: blogs || [],
      quotes: quotes || []
    }
  },


  //private - no randos
  getAddressById: async(...args) => {
    const [[ address ]] = await person.getAddressById(...args);
    return address || 'forcegraphqlerror';
  },

  getAddressByPersonId: async(...args) => {
    const [[ address ]] = await person.getAddressByPersonId(...args);
    return address || 'forcegraphqlerror';
  },

  associateAddressToPerson: async(...args) => {
    const [[ updatedPerson ]] = await person.associateAddressToPerson(...args);
    return updatedPerson || 'forcegraphqlerror';
  },

  //Duplicates ^
  // Address are not changed, they are switched
  createAndAssociateAddressToPerson: async(obj, context) => {
    const [[ { id } ]] = await anyone.createAddress(object, context);
    const assocObj = Object.assign({}, obj, { id });
    const [[ address ]] = await person.associateAddressToPerson(assocObj, context);
    return address || 'forcegraphqlerror';
  },

  updateOrChangeAddressByPersonId: async(...args) => {
    const [[ { id } ]] = await anyone.createAddress(object, context);
    const assocObj = Object.assign({}, obj, { id });
    const [[ address ]] = await person.associateAddressToPerson(...args);
    return address || 'forcegraphqlerror';
  },

  getPersonById: async(...args) => {
    console.log('get person by id')
    const [[ personData ]] = await person.getPersonById(...args);
    return personData || 'forcegraphqlerror';
  },
  // ie RSVP and other things
  updateAttendanceToEventByPersonId: async(...args) => {
    const [[ event ]] = await person.updateAttendanceToEventByPersonId(...args);
    return event || 'forcegraphqlerror';
  },

  getAttendanceByEventId: async(...args) => {
    const [ attendees ] = await person.getAttendanceByEventId(...args);
    console.log('attendances: ', attendees);
    return attendees || 'forcegraphqlerror';
  },

  getAttendanceByPersonId: async(...args) => {
    const [ attendances ] = await person.getAttendanceByPersonId(...args);
    return attendances || 'forcegraphqlerror';
  },

  getListMembershipByPersonId: async(...args) => {
    const [ lists ] = await person.getListMembershipByPersonId(...args);
    return lists || 'forcegraphqlerror';
  },

  loadPersonDataById: async(...args) => {
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
    const [ lists ] = await person.getListsByPersonId(...args);
    const result = {
      address: address || [],
      person: personData,
      events: eventsWithAttendance || [],
      groups: groups,
      lists: lists,
      quotes: quotes
    };

    return result;
  },

  getGroupsByPersonId: async(...args) => {
    const [ groups] = await person.getGroupsByPersonId(...args);
    return groups || 'forcegraphqlerror';
  },

  getGroupMembersByGroupId: async(...args) => {
    const [ groups] = await person.getGroupMembersByGroupId(...args);
    return groups || 'forcegraphqlerror';
  },

  getAllGroups: async(...args) => {
    const [ groups] = await person.getAllGroups(...args);
    return groups || 'forcegraphqlerror';
  },

  createGroup: async(...args) => {
    const [[ group ]] = await person.createGroup(...args);
    return group || 'forcegraphqlerror';
  },

  addToGroupByPersonId: async(...args) => {
    const [[ group ]] = await person.addToGroupByPersonId(...args);
    return { success: !!result };
  },

  removeFromGroupByPersonId: async(...args) => {
    const [[ result ]] = await person.removeFromGroupByPersonId(...args);
    return { success: !!result };
  },

  updateGroupById: async(...args) => {
    const [[ group ]] = await person.updateGroupById(...args);
    return group;
  },

  getAllEvents: async(...args) => {
    const [ events ] = await admin.getAllEvents(...args);
    return events || 'forcegraphqlerror';
  },

  createQuote: async(...args) => {
    const [[ quote ]] = await person.createQuote(...args);
    return quote || 'forcegraphqlerror';
  },

  getQuoteMembersByQuoteId: async(...args) => {
    const [ members ] = await person.getQuoteMembersByQuoteId(...args);
    return members || 'forcegraphqlerror';
  },

  addToQuoteByPersonId: async(...args) => {
    const [[ quote ]] = person.addToQuoteByPersonId(...args);
    return quote || 'forcegraphqlerror';
  },

  getListsByPersonId: async(...args) => {
    const [ lists] = await me.getListsByPersonId(...args);
    return lists || 'forcegraphqlerror';
  },

  //admin

  //TODO use me as model for success check
  updateAddressById: async(...args) => {
    const [[ address ]] = await admin.updateAddressById(...args);
    return address || 'forcegraphqlerror';
  },

  associateAddressToPerson: async(...args) => {
    const [[ updatedPerson ]] = await admin.associateAddressToPerson(...args);
    return updatedPerson || 'forcegraphqlerror';
  },

  deleteAddressById: async(...args) => {
    const [[ address ]] = await admin.deleteAddressById(...args);
    return address || 'forcegraphqlerror';
  },


  getAllPeople: async(...args) => {
    const [ people ] = await admin.getAllPeople(...args);
    return people || 'forcegraphqlerror';
  },

  updatePersonById: async(...args) => {
    const [[ updatedPerson ]] = await admin.updatePersonById(...args);
    return updatedPerson || 'forcegraphqlerror';
  },

  deletePersonById: async(...args) => {
    const [[ deletedPerson ]] = await admin.deleteAddressById(...args);
    return deletedPerson || 'forcegraphqlerror';
  },

  getEventById: async(...args) => {
    const [[ event ]] = await admin.getEventById(...args);
    return event || 'forcegraphqlerror';
  },

  createEvent: async(...args) => {
    const [ [ event ]] = await admin.createEvent(...args);
    return event || 'forcegraphqlerror';
  },

  updateEventById: async(...args) => {
    const [[ event ]] = await admin.updateEventById(...args);
    return event || 'forcegraphqlerror';
  },

  deleteEventById: async(...args) => {
    const [[ event ]] = await admin.deleteEventById(...args);
    return event || 'forcegraphqlerror';
  },

  createAttendance: async(...args) => {
    const [[ attendance ]] = await admin.createAttendance(...args);
    return attendance || 'forcegraphqlerror';
  },

  deleteGroupById: async(...args) => {
    const [[ group ]] = await admin.deleteGroupById(...args);
    return group || 'forcegraphqlerror';
  },

  createLocation: async(...args) => {
    const [[ location ]] = await admin.createLocation(...args);
    return location || 'forcegraphqlerror';
  },

  updateLocationById: async(...args) => {
    const [[ location ]] = await admin.updateLocationById(...args);
    return location || 'forcegraphqlerror';
  },

  deleteLocationById: async(...args) => {
    const [[ location ]] = await admin.deleteLocationById(...args);
    return location || 'forcegraphqlerror';
  },

  updateQuoteById: async(...args) => {
    const [[ quote ]] = await admin.updateQuoteById(...args);
    return quote || 'forcegraphqlerror';
  },

  deleteQuoteById: async(...args) => {
    const [[ quote ]] = await admin.deleteQuoteById(...args);
    return quote || 'forcegraphqlerror';
  },

  createBlog: async(...args) => {
    const [[ blog ]] = await admin.createBlog(...args);
    return blog || 'forcegraphqlerror';
  },

  updateBlogById: async(...args) => {
    const [[ blog ]] = await admin.updateBlogById(...args);
    return blog || 'forcegraphqlerror';
  },

  deleteBlogById: async(...args) => {
    const [[ blog ]] = await admin.deleteBlogById(...args);
    return blog || 'forcegraphqlerror';
  },

  createSong: async(...args) => {
    const [[ song ]] = await admin.createSong(...args);
    return song || 'forcegraphqlerror';
  },

  updateSongById: async(...args) => {
    const [[ song ]] = await admin.updateSongById(...args);
    return song || 'forcegraphqlerror';
  },

  deleteSongById: async(...args) => {
    const [[ song ]] = await admin.deleteSongById(...args);
    return song || 'forcegraphqlerror';
  },

  getListById:async(...args) => {
    const [[ list ]] = await admin.getListById(...args);
    return list || 'forcegraphqlerror';
  },

  getAllLists: async() => {
    const [ lists ] = await admin.getAllLists(...args);
    return lists || 'forcegraphqlerror';
  },

  createList: async(...args) => {
    const [[ list ]] = await admin.createList(...args);
    return list || 'forcegraphqlerror';
  },

  updateListById: async(...args) => {
    const [[ list ]] = await admin.updateListById(...args);
    return list || 'forcegraphqlerror';
  },

  deleteListById: async(...args) => {
    const [[ list ]] = await admin.deleteListById(...args);
    return list || 'forcegraphqlerror';
  },

  addToListByPersonId: async(...args) => {
    const [[ listMember ]] = await admin.addToListByPersonId(...args);
    return { success: !!result };
  },

  getListMembersByListId: async(...args) => {
    const [ members ] = await admin.getListMembersByListId(...args);
    return members || 'forcegraphqlerror';
  },

  loadAdminData: async(...args) => {
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
  }
};
