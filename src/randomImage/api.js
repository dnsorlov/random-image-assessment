function getQuery(params) {
  const arr = Object.keys(params).map(key =>
    key + '=' + encodeURIComponent(params[key])
  );
  return '?' + arr.join('&')
}

const api = {
  getImage: () => fetch('http://api.flickr.com/services/rest/' + getQuery(
    {
      method: 'flickr.photos.getRecent',
      api_key: '30357b18befc2490baeffcbb487f1acc',
      format: 'json',
      nojsoncallback: 1,
      // extras: "description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o",
      extras: "url_h, url_b, url_l, url_c, url_z, url_k, url_o",
      per_page: 1
    }
  )),
};

export default api
