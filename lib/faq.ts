/** FAQ content lives here so the visible accordion and the FAQPage
 *  structured data are generated from one source. Google penalises schema
 *  that does not match what the page actually shows, so they must never be
 *  allowed to drift apart.
 */
/** Answers are written to be true of the shipping app rather than of the
 *  pitch: the history now keeps recordings on disk by default, so the old
 *  "audio is deleted immediately" line would have been a lie. */
export const QUESTIONS = [
  {
    q: "Does any audio leave my Mac?",
    a: "No. Recognition runs on your machine, so there is nothing to upload and no server involved. The app keeps a history of your dictations, including the recordings, so you can play them back — that stays in a folder on your Mac and you can switch it off in Settings, which erases it.",
  },
  {
    q: "What Mac do I need?",
    a: "macOS 13 Ventura or later, on an Apple Silicon Mac — an M1 or newer. Intel Macs are not supported: the recognition engine ships as an Apple Silicon build, so the app will not start on them.",
  },
  {
    q: "Which languages are fast?",
    a: "28, listed above, all handled on-device with punctuation and at the same speed. Languages outside that list use Whisper instead, which is slower but covers much more of the world.",
  },
  {
    q: "Does it work with no internet?",
    a: "Yes. You download a model once from Settings, and after that the app never needs a connection — including on a plane.",
  },
  {
    // Names no alternative. Pointing at a free one, however favourably, only
    // tells a reader who was ready to buy that they had another option.
    q: "Can I choose which key starts it?",
    a: "Yes. Any combination you like, or the right ⌘ on its own — held down like a walkie-talkie, or tapped once to start and once to finish. Whichever key you pick is taken cleanly, so no other app reacts to it while you dictate.",
  },
  {
    q: "Do I need an account?",
    a: "No. There is no sign-up and no login. You buy a license key, paste it once, and that’s the last time the app asks you for anything.",
  },
  {
    q: "Can I get a refund?",
    a: "Within 14 days, for any reason. Email support and we’ll take care of it.",
  },
];
