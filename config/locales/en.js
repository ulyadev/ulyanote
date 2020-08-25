module.exports = {
  tHome: 'Home',
  tRelativePosts: 'Publication',
  tFollowTwitterDescription: 'Follow Me on Twitter',
  tTags: 'Tags',
  tIndTitle: 'All posts',
  taIndKeywords: [`blog`, `publication`, `personal`, `documentation`],
  tfIndCountPosts: count => `${count} Publication`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`,
  t404Title: 'Page Not Available',
  t404Content: 'Ups! you go to wrong URL.',
};
