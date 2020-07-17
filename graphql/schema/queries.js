export default `
  type Query {
    hello: String,
    getAllAddresses: [Address],
    getAddressById(id:Int!): Address,
    getAddressByPersonId(id:Int!): Address,
    getPersonById(id:Int!): Person,
    getAllPeople: [Person],
    getEventById(id:Int!): Event,
    getAllEvents: [Event],
    getAttendanceByPersonId(id:Int!): [Attendance],
    getAttendanceByEventId(id:Int): [Attendance],
    getGroupsByPersonId(id:Int!): [Groupo],
    getGroupMembersByGroupId(id:Int!): [Person],
    getAllGroups: [Groupo],
    getAllAttendances: [Attendance],
    getLocationById(id:Int!): Location,
    getAllLocations: [Location],
    getQuoteById(id:Int!): Quote,
    getQuotesByPersonId(id:Int!): [Quote],
    getAllQuotes: [Quote],
    getQuoteMembersByQuoteId(id:Int!): [Person],
    getBlogById(id:Int!): Blog,
    getAllBlogs: [Blog],
    getSongById(id:Int!): Song,
    getAllSongs: [Song],
    getListById(id:Int!): List,
    getListsByPersonId(id:Int!): [List],
    getAllLists: [List],
    getListMembersByListId(id:Int!): [Person],
    loadPublicData: PublicData,
    loadPersonDataById(id:Int!): PersonData,
    loadAdminData: AdminData
  }
`;