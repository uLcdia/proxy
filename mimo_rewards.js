var obj = JSON.parse($response.body);

obj= {
  "rewards" : [
    {
      "rewardMultiplier" : 3,
      "id" : 47158111,
      "rewardAmount" : 3000,
      "description" : "You kept your Streak going for 3 days",
      "rewardId" : "streak_length"
    },
    {
      "rewardMultiplier" : 1,
      "id" : 47158110,
      "rewardAmount" : 2000,
      "description" : "You completed your daily goal",
      "rewardId" : "daily_goal"
    }
  ]
};

$done({body: JSON.stringify(obj)});
