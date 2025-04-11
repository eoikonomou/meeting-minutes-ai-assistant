export type MeetingDetails = {
  meetingTitle: String
  meetingDate: String
  attendees: String[]
}

export type NotesConfiguration = {
  outputType: String
  meetingDetails: MeetingDetails
}
