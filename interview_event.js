// ======================= SYSTEM SETUP. DO NOT EDIT THIS BLOCK ========================================

const axios = require("axios");
const BASE_URL = "http://ec2-52-66-251-192.ap-south-1.compute.amazonaws.com";

const EventAction = {
  ADD: "ADD",
  UPDATE: "UPDATE",
};

const Services = {
  getCalendarEventsOfUser: ({ interviewerEmail, candidateId, testCaseId }) =>
    axios.get(
      `${BASE_URL}/interviewer-calendar-events?interviewer_email=${interviewerEmail}&candidate_id=${candidateId}&test_case_id=${testCaseId}`
    ),
  getEventsFromExcelSheet: ({ candidateId, testCaseId }) =>
    axios.get(
      `${BASE_URL}/excel-events?candidate_id=${candidateId}&test_case_id=${testCaseId}`
    ),
  getInterviewers: ({ candidateId, testCaseId }) =>
    axios.get(
      `${BASE_URL}/interviewers?candidate_id=${candidateId}&test_case_id=${testCaseId}`
    ),
};

// ======================= END OF SYSTEM SETUP =========================================================

// ======================= UTILITY FUNCTIONS ===========================================================

// checks, if given CANDIDATE_ID (email id) is in valid format or not. returns Boolean
const isCandidateIdValid = (emailId) => {
  const regex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return (
    emailId.toString().toLowerCase() !== "example@email.com" &&
    regex.test(emailId)
  );
};

// converts calender event to excel event. returns an object
const createExcelEventFromCalendarEvent = (calenderEvent, actionString) => ({
  event_id: calenderEvent.calendar_event_id,
  title: calenderEvent.title,
  date: calenderEvent.date,
  time: calenderEvent.time,
  eventAction: actionString, // For action: use EventAction [EventActions are action for each event i.e: ADD, UPDATE]
  calendarAccountOwner: calenderEvent.calendarAccountOwner,
  participants: calenderEvent.participants,
});

// fetch events form excel sheet. returns a List/Array
const getEventsFromExcelSheet = async (candidateId, testCaseId) =>
  (await Services.getEventsFromExcelSheet({ candidateId, testCaseId })
    .then((res) => res.data.data)
    .catch(console.log)) || [];

// fetch events of interviewers from their calender. returns a List/Array
const getCalendarEventsOfUser = async (
  interviewerEmail,
  candidateId,
  testCaseId
) =>
  (await Services.getCalendarEventsOfUser({
    interviewerEmail,
    candidateId,
    testCaseId,
  })
    .then((res) => res.data.data)
    .catch(console.log)) || [];

// fetch interviewer from db. returns a List/Array
const getInterviewers = async (candidateId, testCaseId) =>
  (await Services.getInterviewers({ candidateId, testCaseId })
    .then((res) => res.data.data)
    .catch(console.log)) || [];

// ======================= END OF UTILITY FUNCTIONS ====================================================

// ======================== Start of candidate's code section ==========================================

const CANDIDATE_ID = "EXAMPLE@EMAIL.COM"; // ENTER YOUR EMAIL ADDRESS HERE

const isTitleInFormat = (title, userName) =>
  title.includes(` and ${userName}`) || title.includes(`${userName} and`);

const getDataForWritingInExcelSheet = async (candidateId, testCaseId) => {
  /*

  INSTRUCTION:-
  * You will be writing your code in this section (starting from line 92)
  * You Have to give you valid email as CANDIDATE_ID.
  * CANDIDATE_ID is a "GLOBAL VARIABLE" you can use it anywhere if required.
  * If required, there are utility functions, keep their parameter in mind at the time of calling. 
  * You can create your own methods/functions if you need, but, please try to write them in the candidate's code section.
  * you have to return the LIST of EVENTS that need to be added or updated in Google sheet for this function.

  __________________________________________________HAPPY CODING_________________________________________________________

  */
};

const performTask = async (testCaseId) => {
  const events = [];

  const sortedEvents = events.sort((a, b) => a.event_id - b.event_id);

  return sortedEvents; // returns a List/Array.
};

// ======================== End of candidate's code section ============================================

const main = async (input) => {
  if (isCandidateIdValid(CANDIDATE_ID)) {
    const testCaseId = input.toString();
    const sortedEvents = await performTask(testCaseId);
    console.log(sortedEvents);
  } else {
    console.log(
      "PLEASE PROVIDE YOUR VALID EMAIL AS CANDIDATE_ID.\nSee line num 94."
    );
  }
};

module.exports = getDataForWritingInExcelSheet;
