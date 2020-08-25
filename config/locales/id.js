module.exports = {
  tHome: 'Beranda',
  tRelativePosts: 'Publikasi',
  tFollowTwitterDescription: 'Ikuti Saya di Twitter',
  tTags: 'Tagar',
  tIndTitle: 'Semua Publikasi',
  taIndKeywords: [`blog`, `publikasi`, `pribadi`, `dokumentasi`],
  tfIndCountPosts: count => `${count} Publikasi`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`,
  t404Title: 'Halaman Tidak Ada',
  t404Content: 'Ups! mungkin anda salah mengakses URL.',
};
