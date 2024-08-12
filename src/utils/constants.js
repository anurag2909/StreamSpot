export const GOOGLE_API_KEY = "AIzaSyDNuzV3hilPgKxFL7v-KWA88Me2uktO04c";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_DETAILS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=";

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const LIVE_CHAT_COUNT = 25;
