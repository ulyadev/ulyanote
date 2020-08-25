module.exports = {
  tHome: 'Beranda',
  tRelativePosts: 'Artikel Lainnya',
  tFollowTwitterDescription: 'Ikuti Saya di Twitter',
  tTags: 'Tagar',
  tIndTitle: 'Semua Artikel',
  taIndKeywords: [`blog`, `publikasi`, `pribadi`, `dokumentasi`, `catatan`, `pengalaman`],
  tfIndCountPosts: count => `${count} Artikel`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`,
  t404Title: 'Halaman tidak tersedia',
  t404Content: 'Ups! URL yang anda akses tidak ditemukan.',
};
