module.exports = {
  tHome: 'Home',
  tRelativePosts: 'More Articles',
  tFollowTwitterDescription: 'Follow Me on Twitter',
  tTags: 'Tags',
  tIndTitle: 'All Articles',
  taIndKeywords: [`blog`, `publication`, `personal`, `documentation`, `note`, `experience`],
  tfIndCountPosts: count => `${count} Articles`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`,
  t404Title: 'Page Not Available',
  t404Content: 'Oops! The URL you accessed was not found.',
};
