var obj = JSON.parse($response.body);

obj= {
  "coins" : 999990
};

$done({body: JSON.stringify(obj)});
