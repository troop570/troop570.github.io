window.eagleCountdown = (function () {
  var scoutRanks = [
    {
      title: "Scout",
      minimumTime:.5
    },
    {
      title: "Tenderfoot",
      minimumTime:.5
    },
    {
      title: "Second Class",
      minimumTime:.5
    },
    {
      title: "First Class",
      minimumTime:.5
    },
    {
      title: "Star",
      minimumTime:.5,
      eagleRequiredMB: 4,
      electiveMB: 2
    },
    {
      title: "Life",
      minimumTime:.5,
      eagleRequiredMB: 7,
      electiveMB: 4
    },
    {
      title: "Eagle",
      eagleRequiredMB: 13,
      electiveMB: 8
    }
  ],
    ranks = [
      "Scout",
      "Tenderfoot",
      "Second Class",
      "First Class",
      "Star",
      "Life",
      "Eagle"
    ]
    rankTimes = [
      [3,5,7],  // scout
      [2.5,5,7], // tenderfoot
      [2,5,7], // second class
      [1.5,5,7], // first class
      [1,5,7], // star
      [3,5,7] // life
    ];

  return {
    submitForm: function(evt, data) {
      data.needs = {
        eagleRequiredMbCount: 13 - data.eagleRequiredMbCount,
        electiveMbCount: Math.max(0, 8 - data.electiveMbCount)
      };

/*
      var irank = ranks.indexOf(data.currentRank);
      if (irank >= 0) {

      }
*/
      evt.preventDefault();
      return false;
    },
    activityChecked: function(evt) {

    }
  };
})();
