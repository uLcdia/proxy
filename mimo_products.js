var obj = JSON.parse($response.body);

obj = {
  "purchasedProducts" : [

  ],
  "productsAvailableForPurchase" : [
    {
      "price" : 0,
      "productType" : "streak_freeze",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "custom_app_icon",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "lives_refill",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "streak_repair",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "league_freeze",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "app_icon_batman",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "app_icon_ninja",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "app_icon_pride",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "app_icon_breaking_bad",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "double_sparks_24h",
      "coinPrice" : 0
    },
    {
      "price" : 0,
      "productType" : "streak_challenge_7d",
      "coinPrice" : 0
    }
  ]
};

$done({body: JSON.stringify(obj)});
