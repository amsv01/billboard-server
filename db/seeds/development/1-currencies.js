/* eslint-disable quotes */

exports.seed = function (knex, Promise) {
  return Promise.join(
    knex('currencies').insert([{
      "id": "75CADDCD-5FC9-05FD-CAA3-B17AE8B25A87",
      "name": "usd",
      "symbol": "$",
      "p_name": "دلار آمریکا",
      "e_name": "United States Dollar",
      "icon_url": "",
      "description": ""
    },{
      "id": "C0BF0978-C858-B4B4-260A-ED62026B1CAC",
      "name": "eur",
      "symbol": "€",
      "p_name": "یورو اروپا",
      "e_name": "Euro",
      "icon_url": "",
      "description": ""
    }])
  );
};