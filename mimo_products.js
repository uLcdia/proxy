var obj = JSON.parse($response.body);

obj = {
  "purchasedProducts" : [

  ],
  "productsAvailableForPurchase" : [
    {
      "price" : 0,
      "productType" : "streak_freeze",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "custom_app_icon",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "lives_refill",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "streak_repair",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "league_freeze",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "app_icon_batman",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "app_icon_ninja",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "app_icon_pride",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "app_icon_breaking_bad",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "double_sparks_24h",
      "coinPrice" : 5
    },
    {
      "price" : 0,
      "productType" : "streak_challenge_7d",
      "coinPrice" : 5
    }
  ]
};

$done({body: JSON.stringify(obj)});
