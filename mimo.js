var obj = JSON.parse($response.body);

obj= {
  "subscriptions": [
    {
      "isActive": true,
      "source": "web",
      "type": "pro",
      "interval": "yearly",
      "billingInfo": {
        "currency": "USD",
        "nextBillingPrice": 59.98999999999999
      },
      "intervalCount": 1,
      "activeUntil": "2099-10-10T08:04:21+00:00",
      "createdAt": "2019-10-03T08:04:21+00:00",
      "clientSecret": "",
      "isActive": true
    }
  ],
  "isActive": true,
  "source": "web",
  "type": "pro",
  "interval": "yearly",
  "billingInfo": {
    "currency": "USD",
    "nextBillingPrice": 59.98999999999999
  },
  "intervalCount": 1,
  "activeUntil": "2099-10-10T08:04:21+00:00",
  "createdAt": "2019-10-03T08:04:21+00:00",
  "clientSecret": ""
};

$done({body: JSON.stringify(obj)});
