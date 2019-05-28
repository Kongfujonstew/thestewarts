import { graphql } from '../api';
import { makeObjString } from './helpers/queriestring';

// Note: Generally preferences and settings are not included

// Queries
export const getAddressById = id => graphql(`{ getAddressById(id:${id}) { id address1 address2 city state zip country } }`);
export const getAllAddresses = () => graphql(`{ getAllAddresses { id address1 address2 city state zip country } }`);
export const getAddressByPersonId = id => graphql(`{ getAddressByPersonId(id:${id}) { id address1 address2 city state zip country } }`);
export const getPersonById = id => graphql(`{ getPersonById(id:${id}) { id firstname lastname email phone address_id food notes preferences { language } } }`);
export const getAllPeople = () => graphql(`{ getAllPeople { id firstname lastname email phone address_id food notes preferences { language } } }`);
export const getEventById = id => graphql(`{ getEventById(id:${id}) { id name time img address1 address2 city state zip country send_invitations notes } }`);
export const getAllEvents = () => graphql(`{ getAllEvents { id name time img address1 address2 city state zip country send_invitations notes } }`);
export const getAttendanceByPersonId = id => graphql(`{ getAttendanceByPersonId(id:${id}) { person_id event_id notes invitation_sent rsvpd rsvpyes firstname lastname email } }`);
export const getAttendanceByEventId = id => graphql(`{ getAttendanceByEventId(id:${id}) { person_id event_id notes invitation_sent rsvpd rsvpyes firstname lastname email } }`);
export const getGroupsByPersonId = id => graphql(`{ getGroupsByPersonId(id:${id}) { id parent_id name notes } }`);
// getGroupMembersByGroupId has members
export const getGroupMembersByGroupId = id => graphql(`{ getGroupMembersByGroupId(id:${id}) { id firstname lastname email phone address_id food notes preferences { language } } }`);
export const getAllGroups = () => graphql(`{ getAllGroups { id parent_id name notes } }`);
export const getLocationById = id => graphql(`{ getLocationById(id:${id}) { id name address_id notes } }`);
export const getAllLocations = () => graphql(`{ getAllLocations { id name address_id notes } }`);
export const getQuoteById = id => graphql(`{ getQuoteById(id:${id}) { id text author notes } }`);
export const getQuotesByPersonId = id => graphql(`{ getQuotesByPersonId(id:${id}) { id text author notes } }`);
export const getAllQuotes = () => graphql(`{ getAllQuotes { id text author notes } }`);
export const getQuoteMembersByQuoteId = id => graphql(`{ getQuoteMembersByQuoteId(id:${id}) { id firstname lastname email phone address_id food notes preferences { language } } }`);
export const getBlogById = id => graphql(`{ getBlogById(id:${id}) { id date title text notes } }`);
export const getAllBlogs = () => graphql(`{ getAllBlogs { id date title text notes } }`);
export const getSongById = id => graphql(`{ getSongById(id:${id}) { id artist title url notes html } }`);
export const getAllSongs = () => graphql(`{ getAllSongs { id artist title url notes html } }`);
// getListMembersByListId has members
export const getListMembersByListId = id => graphql(`{ getListMembersByListId(id:${id}) { id firstname lastname email phone address_id food notes preferences { language } } }`);
export const getListById = id => graphql(`{ getListById(id:${id}) { id name } }`);
export const getListsByPersonId = id => graphql(`{ getListsByPersonId(id:${id}) { id name } }`);
export const getAllLists = () => graphql(`{ getAllLists { id name } }`);


// Mutations
export const createAddress = address => graphql(`mutation { createAddress(address: ${makeObjString(address)}) { id address1 address2 city state zip country } }`);
export const createAndAssociateAddressToPerson = (address, personId) => graphql(`mutation { createAndAssociateAddressToPerson(address: ${makeObjString(address)}, personId:${personId}) }`);
export const updateOrChangeAddressByPersonId = (address, personId) => graphql(`mutation { updateOrChangeAddressByPersonId(address: ${makeObjString(address)}, personId:${personId}) }`);
export const updateAddressById = (id, address) => graphql(`mutation { updateAddressById(id:${id}, address: ${makeObjString(address)}) { id address1 address2 city state zip country } }`);
export const associateAddressToPerson = (id, personId) => graphql(`mutation { associateAddressToPerson(id: ${id}, personId:${personId}) }`);
export const deleteAddressById = id => graphql(`mutation { deleteAddressById(id: ${id}) { id } }`);
export const createPerson = person => graphql(`mutation { createPerson(person: ${makeObjString(person)}) { id firstname lastname email phone address_id food notes preferences { language } } }`);
export const updatePersonById = (id, person) => graphql(`mutation { updatePersonById(id:${id}, person: ${makeObjString(person)}) { id firstname lastname email phone address_id food notes preferences { language } } }`);
export const deletePersonById = id => graphql(`mutation { deletePersonById(id: ${id}) { id } }`);
export const createEvent = eventData => graphql(`mutation { createEvent(event: ${makeObjString(eventData)}) { id name time address1 address2 city state zip country send_invitations notes } }`);
export const updateEventById = (id, event) => graphql(`mutation { updateEventById(id:${id}, event: ${makeObjString(event)}) { id name time address1 address2 city state zip country send_invitations notes } }`);
export const deleteEventById = id => graphql(`mutation { deleteEventById(id: ${id}) { id } }`);
export const createAttendance = attendance => graphql(`mutation { createAttendance(attendance: ${makeObjString(attendance)}) { person_id event_id notes invitation_sent rsvpd rsvpyes firstname lastname email } }`);
export const updateAttendance = attendance => graphql(`mutation { updateAttendance(attendance: ${makeObjString(attendance)}) { person_id event_id notes invitation_sent rsvpd rsvpyes firstname lastname email } }`);
export const createGroup = group => graphql(`mutation { createGroup(group: ${makeObjString(group)}) { id parent_id name notes } }`);
export const addToGroupByPersonId = (id, personId) => graphql(`mutation { addToGroupByPersonId(id: ${id}, personId: ${personId}) }`);
export const removeFromGroupByPersonId = (id, personId) => graphql(`mutation { removeFromGroupByPersonId(id: ${id}, personId: ${personId}) }`);
export const updateGroupById = (id, group) => graphql(`mutation { updateGroupById(id:${id}, group: ${makeObjString(group)}) { id parent_id name notes } }`);
export const deleteGroupById = id => graphql(`mutation { deleteGroupById(id: ${id}) { id } }`);
export const createLocation = location => graphql(`mutation { createLocation(location: ${makeObjString(location)}) { id name address_id notes } }`);
export const updateLocationById = (id, location) => graphql(`mutation { updateLocationById(id:${id}, location: ${makeObjString(location)}) { id name address_id notes } }`);
export const deleteLocationById = id => graphql(`mutation { deleteLocationById(id: ${id}) { id } }`);
export const createQuote = quote => graphql(`mutation { createQuote(quote: ${makeObjString(quote)}) { id text author notes } }`);
export const updateQuoteById = (id, quote) => graphql(`mutation { updateQuoteById(id:${id}, quote: ${makeObjString(quote)}) { id text author notes } }`);
export const deleteQuoteById = id => graphql(`mutation { deleteQuoteById(id: ${id}) { id } }`);
export const addToQuoteByPersonId = (id, personId) => graphql(`mutation { addToQuoteByPersonId(id: ${id}, personId: ${personId}) }`);
export const createBlog = blog => graphql(`mutation { createBlog(blog: ${makeObjString(blog)}) { id date title text notes } }`);
export const updateBlogById = (id, blog) => graphql(`mutation { updateBlogById(id:${id}, blog: ${makeObjString(blog)}) { id date title text notes } }`);
export const deleteBlogById = id => graphql(`mutation { deleteBlogById(id: ${id}) { id } }`);
export const createSong = song => graphql(`mutation { createSong(song: ${makeObjString(song)}) { id artist title url notes html } }`);
export const updateSongById = (id, song) => graphql(`mutation { updateSongById(id:${id}, song: ${makeObjString(song)}) { id artist title url notes html } }`);
export const deleteSongById = id => graphql(`mutation { deleteSongById(id: ${id}) { id } }`);
export const createList = list => graphql(`mutation { createList(list: ${makeObjString(list)}) { id name } }`);
export const updateListById = (id, list) => graphql(`mutation { updateListById(id:${id}, list: ${makeObjString(list)}) { id name } }`);
export const deleteListById = id => graphql(`mutation { deleteListById(id: ${id}) { id } }`);
export const addToListByPersonId = (id, personId) => graphql(`mutation { addToListByPersonId(id: ${id}, personId: ${personId}) }`);
export const loadPublicData = () => graphql(`{ loadPublicData { locations { id name address_id notes } quotes { id text author notes } blogs { id date title text notes } songs { id artist title url notes html } } }`);
export const loadPersonDataById = id => graphql(`{ loadPersonDataById(id: ${id}) { address { id address1 address2 city state zip country } person { id firstname lastname email phone address_id food notes preferences { language } } events { id name time address1 address2 city state zip country send_invitations notes } groups { id parent_id name notes } quotes { id text author notes } songs { id artist title url notes html } lists { id name } } }`);
export const loadAdminData = () => graphql(`{ loadAdminData { addresses { id address1 address2 city state zip country settings { settings1 } } people { id firstname lastname email phone address_id food notes preferences { language } } events { id name time img address_id address1 address2 city state zip country send_invitations notes settings { settings1 } } groups { id parent_id name notes settings { settings1 } members { id firstname lastname email phone address_id food notes preferences { language } } } locations { id name address_id notes settings { settings1 } } quotes { id text author settings { settings1 } members { id firstname lastname email phone address_id food notes preferences { language } } notes } blogs { id date title text notes } songs { id artist title url notes html } lists { id name settings { settings1 } members { id firstname lastname email phone address_id food notes preferences { language } } } } }`);
