export const endpoints = {
  getPodcasts:
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  getTracks: (podcastId) =>
    `https://cors-anywhere.herokuapp.com/itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
}
// https://allorigins.win/

export const oneDay = 24 * 60 * 60 * 1000
