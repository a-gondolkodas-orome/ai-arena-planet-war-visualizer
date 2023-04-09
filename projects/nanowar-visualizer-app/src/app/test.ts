export const jsonstring = `
{
  "init": {
    "board": {
      "width": 200,
      "height": 200
    },
    "planets": [
      {
        "id": 0,
        "x": 50,
        "y": 50,
        "size": 10,
        "player": 0
      },
      {
        "id": 1,
        "x": 150,
        "y": 150,
        "size": 10,
        "player": 1
      },
      {
        "id": 2,
        "x": 50,
        "y": 150,
        "size": 10,
        "player": null
      },
      {
        "id": 3,
        "x": 150,
        "y": 50,
        "size": 10,
        "player": null
      }
    ],
    "players": [
      {
        "id": "abcd1234",
        "name": "bot1",
        "index": 0
      },
      {
        "id": "1234abcd",
        "name": "bot2",
        "index": 1
      }
    ]
  },
  "ticks": [
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 10
        },
        {
          "id": 1,
          "player": 1,
          "population": 10
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "START",
              "timestamp": 1681058529052
            },
            {
              "message": "0\\n4\\n50 50 1\\n150 150 1\\n50 150 3\\n150 50 1\\n0 14 10 10 \\n14 0 10 10 \\n10 10 0 14 \\n10 10 14 0 \\n",
              "timestamp": 1681058529115
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1681058529082
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "START",
              "timestamp": 1681058529082
            },
            {
              "message": "1\\n4\\n50 50 1\\n150 150 1\\n50 150 3\\n150 50 1\\n0 14 10 10 \\n14 0 10 10 \\n10 10 0 14 \\n10 10 14 0 \\n",
              "timestamp": 1681058529117
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1681058529113
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 11
        },
        {
          "id": 1,
          "player": 1,
          "population": 11
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "1\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681058529123
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529153
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "1\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681058529153
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529184
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 12
        },
        {
          "id": 1,
          "player": 1,
          "population": 12
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "2\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681058529185
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529215
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "2\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681058529215
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529245
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 13
        },
        {
          "id": 1,
          "player": 1,
          "population": 13
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "3\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681058529246
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529280
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "3\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681058529280
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529311
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 2
        },
        {
          "id": 1,
          "player": 1,
          "population": 14
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 0
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "4\\n0 0 13\\n1 1 13\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681058529312
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681058529343
            },
            {
              "message": "0 2 12",
              "timestamp": 1681058529343
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "4\\n0 0 13\\n1 1 13\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681058529344
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529374
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 3
        },
        {
          "id": 1,
          "player": 1,
          "population": 15
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 1
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "5\\n0 0 2\\n1 1 14\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529376
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529406
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "5\\n0 0 2\\n1 1 14\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529406
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529437
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 4
        },
        {
          "id": 1,
          "player": 1,
          "population": 16
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 2
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "6\\n0 0 3\\n1 1 15\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529437
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529468
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "6\\n0 0 3\\n1 1 15\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529468
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529498
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 5
        },
        {
          "id": 1,
          "player": 1,
          "population": 17
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 3
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "7\\n0 0 4\\n1 1 16\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529499
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529529
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "7\\n0 0 4\\n1 1 16\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529529
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529560
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 6
        },
        {
          "id": 1,
          "player": 1,
          "population": 18
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 4
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "8\\n0 0 5\\n1 1 17\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529560
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529590
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "8\\n0 0 5\\n1 1 17\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529590
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529621
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 7
        },
        {
          "id": 1,
          "player": 1,
          "population": 19
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 5
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "9\\n0 0 6\\n1 1 18\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529621
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529651
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "9\\n0 0 6\\n1 1 18\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529652
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529682
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 8
        },
        {
          "id": 1,
          "player": 1,
          "population": 20
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 6
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "10\\n0 0 7\\n1 1 19\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529682
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529713
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "10\\n0 0 7\\n1 1 19\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529713
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681058529743
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681058529743
            }
          ],
          "commandError": "Invalid planet id in line 1! They should be between 0 and 4: -1 1 1"
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 9
        },
        {
          "id": 1,
          "player": 1,
          "population": 21
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 7
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "11\\n0 0 8\\n1 1 20\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529743
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529774
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "11\\n0 0 8\\n1 1 20\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529774
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529804
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 10
        },
        {
          "id": 1,
          "player": 1,
          "population": 22
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 8
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "12\\n0 0 9\\n1 1 21\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529805
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529835
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "12\\n0 0 9\\n1 1 21\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529835
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529866
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 11
        },
        {
          "id": 1,
          "player": 1,
          "population": 23
        },
        {
          "id": 2,
          "player": null,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 0,
          "from": 0,
          "to": 2,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 9
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "13\\n0 0 10\\n1 1 22\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529866
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529896
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "13\\n0 0 10\\n1 1 22\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529896
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529926
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 12
        },
        {
          "id": 1,
          "player": 1,
          "population": 24
        },
        {
          "id": 2,
          "player": 0,
          "population": 11
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "14\\n0 0 11\\n1 1 23\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529927
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529957
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "14\\n0 0 11\\n1 1 23\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681058529958
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058529988
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 13
        },
        {
          "id": 1,
          "player": 1,
          "population": 25
        },
        {
          "id": 2,
          "player": 0,
          "population": 11
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "15\\n0 0 12\\n1 1 24\\n2 0 11\\n3 -1 1\\n0\\n",
              "timestamp": 1681058529989
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530019
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "15\\n0 0 12\\n1 1 24\\n2 0 11\\n3 -1 1\\n0\\n",
              "timestamp": 1681058530019
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530050
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 2
        },
        {
          "id": 1,
          "player": 1,
          "population": 26
        },
        {
          "id": 2,
          "player": 0,
          "population": 11
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 0
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "16\\n0 0 13\\n1 1 25\\n2 0 11\\n3 -1 1\\n0\\n",
              "timestamp": 1681058530050
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681058530080
            },
            {
              "message": "0 3 12",
              "timestamp": 1681058530080
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "16\\n0 0 13\\n1 1 25\\n2 0 11\\n3 -1 1\\n0\\n",
              "timestamp": 1681058530080
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530111
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 3
        },
        {
          "id": 1,
          "player": 1,
          "population": 27
        },
        {
          "id": 2,
          "player": 0,
          "population": 12
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 1
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "17\\n0 0 2\\n1 1 26\\n2 0 11\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530111
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530141
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "17\\n0 0 2\\n1 1 26\\n2 0 11\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530141
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530171
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 4
        },
        {
          "id": 1,
          "player": 1,
          "population": 28
        },
        {
          "id": 2,
          "player": 0,
          "population": 12
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 2
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "18\\n0 0 3\\n1 1 27\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530172
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530201
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "18\\n0 0 3\\n1 1 27\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530202
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530232
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 5
        },
        {
          "id": 1,
          "player": 1,
          "population": 29
        },
        {
          "id": 2,
          "player": 0,
          "population": 12
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 3
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "19\\n0 0 4\\n1 1 28\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530233
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530263
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "19\\n0 0 4\\n1 1 28\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530263
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530293
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 6
        },
        {
          "id": 1,
          "player": 1,
          "population": 30
        },
        {
          "id": 2,
          "player": 0,
          "population": 13
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 4
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "20\\n0 0 5\\n1 1 29\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530294
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530324
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "20\\n0 0 5\\n1 1 29\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530324
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681058530355
            }
          ],
          "commandError": "Expected the number of commands, but received: -1"
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 7
        },
        {
          "id": 1,
          "player": 1,
          "population": 31
        },
        {
          "id": 2,
          "player": 0,
          "population": 13
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 5
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "21\\n0 0 6\\n1 1 30\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530356
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530387
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "21\\n0 0 6\\n1 1 30\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530388
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530418
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 8
        },
        {
          "id": 1,
          "player": 1,
          "population": 32
        },
        {
          "id": 2,
          "player": 0,
          "population": 13
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 6
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "22\\n0 0 7\\n1 1 31\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530418
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530449
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "22\\n0 0 7\\n1 1 31\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530449
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530479
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 9
        },
        {
          "id": 1,
          "player": 1,
          "population": 33
        },
        {
          "id": 2,
          "player": 0,
          "population": 14
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 7
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "23\\n0 0 8\\n1 1 32\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530480
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530510
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "23\\n0 0 8\\n1 1 32\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530510
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530541
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 10
        },
        {
          "id": 1,
          "player": 1,
          "population": 34
        },
        {
          "id": 2,
          "player": 0,
          "population": 14
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 8
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "24\\n0 0 9\\n1 1 33\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530541
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530572
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "24\\n0 0 9\\n1 1 33\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530572
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530602
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 11
        },
        {
          "id": 1,
          "player": 1,
          "population": 35
        },
        {
          "id": 2,
          "player": 0,
          "population": 14
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 0,
          "to": 3,
          "player": 0,
          "size": 12,
          "distance": 10,
          "progress": 9
        }
      ],
      "messages": {
        "0": {
          "received": [
            {
              "message": "25\\n0 0 10\\n1 1 34\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530603
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530633
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "25\\n0 0 10\\n1 1 34\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530633
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530662
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 12
        },
        {
          "id": 1,
          "player": 1,
          "population": 36
        },
        {
          "id": 2,
          "player": 0,
          "population": 15
        },
        {
          "id": 3,
          "player": 0,
          "population": 11
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "26\\n0 0 11\\n1 1 35\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530663
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530693
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "26\\n0 0 11\\n1 1 35\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681058530693
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530725
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 13
        },
        {
          "id": 1,
          "player": 1,
          "population": 37
        },
        {
          "id": 2,
          "player": 0,
          "population": 15
        },
        {
          "id": 3,
          "player": 0,
          "population": 12
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "27\\n0 0 12\\n1 1 36\\n2 0 15\\n3 0 11\\n0\\n",
              "timestamp": 1681058530726
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530756
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "27\\n0 0 12\\n1 1 36\\n2 0 15\\n3 0 11\\n0\\n",
              "timestamp": 1681058530756
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530786
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 14
        },
        {
          "id": 1,
          "player": 1,
          "population": 38
        },
        {
          "id": 2,
          "player": 0,
          "population": 15
        },
        {
          "id": 3,
          "player": 0,
          "population": 13
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "28\\n0 0 13\\n1 1 37\\n2 0 15\\n3 0 12\\n0\\n",
              "timestamp": 1681058530786
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530817
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "28\\n0 0 13\\n1 1 37\\n2 0 15\\n3 0 12\\n0\\n",
              "timestamp": 1681058530817
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530847
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 15
        },
        {
          "id": 1,
          "player": 1,
          "population": 39
        },
        {
          "id": 2,
          "player": 0,
          "population": 16
        },
        {
          "id": 3,
          "player": 0,
          "population": 14
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "29\\n0 0 14\\n1 1 38\\n2 0 15\\n3 0 13\\n0\\n",
              "timestamp": 1681058530848
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530878
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "29\\n0 0 14\\n1 1 38\\n2 0 15\\n3 0 13\\n0\\n",
              "timestamp": 1681058530878
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530909
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 16
        },
        {
          "id": 1,
          "player": 1,
          "population": 40
        },
        {
          "id": 2,
          "player": 0,
          "population": 16
        },
        {
          "id": 3,
          "player": 0,
          "population": 15
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "30\\n0 0 15\\n1 1 39\\n2 0 16\\n3 0 14\\n0\\n",
              "timestamp": 1681058530909
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058530939
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "30\\n0 0 15\\n1 1 39\\n2 0 16\\n3 0 14\\n0\\n",
              "timestamp": 1681058530939
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681058530970
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681058530970
            }
          ],
          "commandError": "Invalid planet id in line 1! They should be between 0 and 4: -1 1 1"
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 17
        },
        {
          "id": 1,
          "player": 1,
          "population": 41
        },
        {
          "id": 2,
          "player": 0,
          "population": 16
        },
        {
          "id": 3,
          "player": 0,
          "population": 16
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "31\\n0 0 16\\n1 1 40\\n2 0 16\\n3 0 15\\n0\\n",
              "timestamp": 1681058530970
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531001
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "31\\n0 0 16\\n1 1 40\\n2 0 16\\n3 0 15\\n0\\n",
              "timestamp": 1681058531001
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531031
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 18
        },
        {
          "id": 1,
          "player": 1,
          "population": 42
        },
        {
          "id": 2,
          "player": 0,
          "population": 17
        },
        {
          "id": 3,
          "player": 0,
          "population": 17
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "32\\n0 0 17\\n1 1 41\\n2 0 16\\n3 0 16\\n0\\n",
              "timestamp": 1681058531032
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531062
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "32\\n0 0 17\\n1 1 41\\n2 0 16\\n3 0 16\\n0\\n",
              "timestamp": 1681058531062
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531093
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 19
        },
        {
          "id": 1,
          "player": 1,
          "population": 43
        },
        {
          "id": 2,
          "player": 0,
          "population": 17
        },
        {
          "id": 3,
          "player": 0,
          "population": 18
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "33\\n0 0 18\\n1 1 42\\n2 0 17\\n3 0 17\\n0\\n",
              "timestamp": 1681058531093
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531123
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "33\\n0 0 18\\n1 1 42\\n2 0 17\\n3 0 17\\n0\\n",
              "timestamp": 1681058531124
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531154
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 20
        },
        {
          "id": 1,
          "player": 1,
          "population": 44
        },
        {
          "id": 2,
          "player": 0,
          "population": 17
        },
        {
          "id": 3,
          "player": 0,
          "population": 19
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "34\\n0 0 19\\n1 1 43\\n2 0 17\\n3 0 18\\n0\\n",
              "timestamp": 1681058531154
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531185
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "34\\n0 0 19\\n1 1 43\\n2 0 17\\n3 0 18\\n0\\n",
              "timestamp": 1681058531185
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531215
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 21
        },
        {
          "id": 1,
          "player": 1,
          "population": 45
        },
        {
          "id": 2,
          "player": 0,
          "population": 18
        },
        {
          "id": 3,
          "player": 0,
          "population": 20
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "35\\n0 0 20\\n1 1 44\\n2 0 17\\n3 0 19\\n0\\n",
              "timestamp": 1681058531216
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531246
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "35\\n0 0 20\\n1 1 44\\n2 0 17\\n3 0 19\\n0\\n",
              "timestamp": 1681058531246
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531277
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 22
        },
        {
          "id": 1,
          "player": 1,
          "population": 46
        },
        {
          "id": 2,
          "player": 0,
          "population": 18
        },
        {
          "id": 3,
          "player": 0,
          "population": 21
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "36\\n0 0 21\\n1 1 45\\n2 0 18\\n3 0 20\\n0\\n",
              "timestamp": 1681058531277
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531308
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "36\\n0 0 21\\n1 1 45\\n2 0 18\\n3 0 20\\n0\\n",
              "timestamp": 1681058531308
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531338
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 23
        },
        {
          "id": 1,
          "player": 1,
          "population": 47
        },
        {
          "id": 2,
          "player": 0,
          "population": 18
        },
        {
          "id": 3,
          "player": 0,
          "population": 22
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "37\\n0 0 22\\n1 1 46\\n2 0 18\\n3 0 21\\n0\\n",
              "timestamp": 1681058531338
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531368
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "37\\n0 0 22\\n1 1 46\\n2 0 18\\n3 0 21\\n0\\n",
              "timestamp": 1681058531369
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531399
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 24
        },
        {
          "id": 1,
          "player": 1,
          "population": 48
        },
        {
          "id": 2,
          "player": 0,
          "population": 19
        },
        {
          "id": 3,
          "player": 0,
          "population": 23
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "38\\n0 0 23\\n1 1 47\\n2 0 18\\n3 0 22\\n0\\n",
              "timestamp": 1681058531399
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531430
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "38\\n0 0 23\\n1 1 47\\n2 0 18\\n3 0 22\\n0\\n",
              "timestamp": 1681058531430
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531460
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 25
        },
        {
          "id": 1,
          "player": 1,
          "population": 49
        },
        {
          "id": 2,
          "player": 0,
          "population": 19
        },
        {
          "id": 3,
          "player": 0,
          "population": 24
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "39\\n0 0 24\\n1 1 48\\n2 0 19\\n3 0 23\\n0\\n",
              "timestamp": 1681058531460
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531491
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "39\\n0 0 24\\n1 1 48\\n2 0 19\\n3 0 23\\n0\\n",
              "timestamp": 1681058531491
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531521
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 26
        },
        {
          "id": 1,
          "player": 1,
          "population": 50
        },
        {
          "id": 2,
          "player": 0,
          "population": 19
        },
        {
          "id": 3,
          "player": 0,
          "population": 25
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "40\\n0 0 25\\n1 1 49\\n2 0 19\\n3 0 24\\n0\\n",
              "timestamp": 1681058531521
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531552
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "40\\n0 0 25\\n1 1 49\\n2 0 19\\n3 0 24\\n0\\n",
              "timestamp": 1681058531552
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681058531582
            }
          ],
          "commandError": "Expected the number of commands, but received: -1"
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 27
        },
        {
          "id": 1,
          "player": 1,
          "population": 51
        },
        {
          "id": 2,
          "player": 0,
          "population": 20
        },
        {
          "id": 3,
          "player": 0,
          "population": 26
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "41\\n0 0 26\\n1 1 50\\n2 0 19\\n3 0 25\\n0\\n",
              "timestamp": 1681058531583
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531613
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "41\\n0 0 26\\n1 1 50\\n2 0 19\\n3 0 25\\n0\\n",
              "timestamp": 1681058531613
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531642
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 28
        },
        {
          "id": 1,
          "player": 1,
          "population": 52
        },
        {
          "id": 2,
          "player": 0,
          "population": 20
        },
        {
          "id": 3,
          "player": 0,
          "population": 27
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "42\\n0 0 27\\n1 1 51\\n2 0 20\\n3 0 26\\n0\\n",
              "timestamp": 1681058531643
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531673
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "42\\n0 0 27\\n1 1 51\\n2 0 20\\n3 0 26\\n0\\n",
              "timestamp": 1681058531673
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531703
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 29
        },
        {
          "id": 1,
          "player": 1,
          "population": 53
        },
        {
          "id": 2,
          "player": 0,
          "population": 20
        },
        {
          "id": 3,
          "player": 0,
          "population": 28
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "43\\n0 0 28\\n1 1 52\\n2 0 20\\n3 0 27\\n0\\n",
              "timestamp": 1681058531704
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531734
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "43\\n0 0 28\\n1 1 52\\n2 0 20\\n3 0 27\\n0\\n",
              "timestamp": 1681058531734
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531764
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 30
        },
        {
          "id": 1,
          "player": 1,
          "population": 54
        },
        {
          "id": 2,
          "player": 0,
          "population": 21
        },
        {
          "id": 3,
          "player": 0,
          "population": 29
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "44\\n0 0 29\\n1 1 53\\n2 0 20\\n3 0 28\\n0\\n",
              "timestamp": 1681058531765
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531795
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "44\\n0 0 29\\n1 1 53\\n2 0 20\\n3 0 28\\n0\\n",
              "timestamp": 1681058531795
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531826
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 31
        },
        {
          "id": 1,
          "player": 1,
          "population": 55
        },
        {
          "id": 2,
          "player": 0,
          "population": 21
        },
        {
          "id": 3,
          "player": 0,
          "population": 30
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "45\\n0 0 30\\n1 1 54\\n2 0 21\\n3 0 29\\n0\\n",
              "timestamp": 1681058531826
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531856
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "45\\n0 0 30\\n1 1 54\\n2 0 21\\n3 0 29\\n0\\n",
              "timestamp": 1681058531856
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531886
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 32
        },
        {
          "id": 1,
          "player": 1,
          "population": 56
        },
        {
          "id": 2,
          "player": 0,
          "population": 21
        },
        {
          "id": 3,
          "player": 0,
          "population": 31
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "46\\n0 0 31\\n1 1 55\\n2 0 21\\n3 0 30\\n0\\n",
              "timestamp": 1681058531887
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531917
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "46\\n0 0 31\\n1 1 55\\n2 0 21\\n3 0 30\\n0\\n",
              "timestamp": 1681058531917
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531947
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 33
        },
        {
          "id": 1,
          "player": 1,
          "population": 57
        },
        {
          "id": 2,
          "player": 0,
          "population": 22
        },
        {
          "id": 3,
          "player": 0,
          "population": 32
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "47\\n0 0 32\\n1 1 56\\n2 0 21\\n3 0 31\\n0\\n",
              "timestamp": 1681058531948
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058531978
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "47\\n0 0 32\\n1 1 56\\n2 0 21\\n3 0 31\\n0\\n",
              "timestamp": 1681058531978
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532008
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 34
        },
        {
          "id": 1,
          "player": 1,
          "population": 58
        },
        {
          "id": 2,
          "player": 0,
          "population": 22
        },
        {
          "id": 3,
          "player": 0,
          "population": 33
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "48\\n0 0 33\\n1 1 57\\n2 0 22\\n3 0 32\\n0\\n",
              "timestamp": 1681058532009
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532039
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "48\\n0 0 33\\n1 1 57\\n2 0 22\\n3 0 32\\n0\\n",
              "timestamp": 1681058532039
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532069
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 35
        },
        {
          "id": 1,
          "player": 1,
          "population": 59
        },
        {
          "id": 2,
          "player": 0,
          "population": 22
        },
        {
          "id": 3,
          "player": 0,
          "population": 34
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "49\\n0 0 34\\n1 1 58\\n2 0 22\\n3 0 33\\n0\\n",
              "timestamp": 1681058532069
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532100
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "49\\n0 0 34\\n1 1 58\\n2 0 22\\n3 0 33\\n0\\n",
              "timestamp": 1681058532100
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532130
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 36
        },
        {
          "id": 1,
          "player": 1,
          "population": 60
        },
        {
          "id": 2,
          "player": 0,
          "population": 23
        },
        {
          "id": 3,
          "player": 0,
          "population": 35
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "50\\n0 0 35\\n1 1 59\\n2 0 22\\n3 0 34\\n0\\n",
              "timestamp": 1681058532130
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532161
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "50\\n0 0 35\\n1 1 59\\n2 0 22\\n3 0 34\\n0\\n",
              "timestamp": 1681058532161
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681058532191
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681058532191
            }
          ],
          "commandError": "Invalid planet id in line 1! They should be between 0 and 4: -1 1 1"
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 37
        },
        {
          "id": 1,
          "player": 1,
          "population": 61
        },
        {
          "id": 2,
          "player": 0,
          "population": 23
        },
        {
          "id": 3,
          "player": 0,
          "population": 36
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "51\\n0 0 36\\n1 1 60\\n2 0 23\\n3 0 35\\n0\\n",
              "timestamp": 1681058532191
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532221
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "51\\n0 0 36\\n1 1 60\\n2 0 23\\n3 0 35\\n0\\n",
              "timestamp": 1681058532222
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532252
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 38
        },
        {
          "id": 1,
          "player": 1,
          "population": 62
        },
        {
          "id": 2,
          "player": 0,
          "population": 23
        },
        {
          "id": 3,
          "player": 0,
          "population": 37
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "52\\n0 0 37\\n1 1 61\\n2 0 23\\n3 0 36\\n0\\n",
              "timestamp": 1681058532252
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532283
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "52\\n0 0 37\\n1 1 61\\n2 0 23\\n3 0 36\\n0\\n",
              "timestamp": 1681058532283
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532313
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 39
        },
        {
          "id": 1,
          "player": 1,
          "population": 63
        },
        {
          "id": 2,
          "player": 0,
          "population": 24
        },
        {
          "id": 3,
          "player": 0,
          "population": 38
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "53\\n0 0 38\\n1 1 62\\n2 0 23\\n3 0 37\\n0\\n",
              "timestamp": 1681058532313
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532344
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "53\\n0 0 38\\n1 1 62\\n2 0 23\\n3 0 37\\n0\\n",
              "timestamp": 1681058532344
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532374
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 40
        },
        {
          "id": 1,
          "player": 1,
          "population": 64
        },
        {
          "id": 2,
          "player": 0,
          "population": 24
        },
        {
          "id": 3,
          "player": 0,
          "population": 39
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "54\\n0 0 39\\n1 1 63\\n2 0 24\\n3 0 38\\n0\\n",
              "timestamp": 1681058532374
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532405
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "54\\n0 0 39\\n1 1 63\\n2 0 24\\n3 0 38\\n0\\n",
              "timestamp": 1681058532405
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532435
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 41
        },
        {
          "id": 1,
          "player": 1,
          "population": 65
        },
        {
          "id": 2,
          "player": 0,
          "population": 24
        },
        {
          "id": 3,
          "player": 0,
          "population": 40
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "55\\n0 0 40\\n1 1 64\\n2 0 24\\n3 0 39\\n0\\n",
              "timestamp": 1681058532435
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532466
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "55\\n0 0 40\\n1 1 64\\n2 0 24\\n3 0 39\\n0\\n",
              "timestamp": 1681058532466
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532496
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 42
        },
        {
          "id": 1,
          "player": 1,
          "population": 66
        },
        {
          "id": 2,
          "player": 0,
          "population": 25
        },
        {
          "id": 3,
          "player": 0,
          "population": 41
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "56\\n0 0 41\\n1 1 65\\n2 0 24\\n3 0 40\\n0\\n",
              "timestamp": 1681058532496
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532526
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "56\\n0 0 41\\n1 1 65\\n2 0 24\\n3 0 40\\n0\\n",
              "timestamp": 1681058532527
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532557
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 43
        },
        {
          "id": 1,
          "player": 1,
          "population": 67
        },
        {
          "id": 2,
          "player": 0,
          "population": 25
        },
        {
          "id": 3,
          "player": 0,
          "population": 42
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "57\\n0 0 42\\n1 1 66\\n2 0 25\\n3 0 41\\n0\\n",
              "timestamp": 1681058532557
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532588
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "57\\n0 0 42\\n1 1 66\\n2 0 25\\n3 0 41\\n0\\n",
              "timestamp": 1681058532588
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532618
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 44
        },
        {
          "id": 1,
          "player": 1,
          "population": 68
        },
        {
          "id": 2,
          "player": 0,
          "population": 25
        },
        {
          "id": 3,
          "player": 0,
          "population": 43
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "58\\n0 0 43\\n1 1 67\\n2 0 25\\n3 0 42\\n0\\n",
              "timestamp": 1681058532618
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532648
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "58\\n0 0 43\\n1 1 67\\n2 0 25\\n3 0 42\\n0\\n",
              "timestamp": 1681058532648
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532679
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 45
        },
        {
          "id": 1,
          "player": 1,
          "population": 69
        },
        {
          "id": 2,
          "player": 0,
          "population": 26
        },
        {
          "id": 3,
          "player": 0,
          "population": 44
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "59\\n0 0 44\\n1 1 68\\n2 0 25\\n3 0 43\\n0\\n",
              "timestamp": 1681058532679
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532709
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "59\\n0 0 44\\n1 1 68\\n2 0 25\\n3 0 43\\n0\\n",
              "timestamp": 1681058532709
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532740
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 46
        },
        {
          "id": 1,
          "player": 1,
          "population": 70
        },
        {
          "id": 2,
          "player": 0,
          "population": 26
        },
        {
          "id": 3,
          "player": 0,
          "population": 45
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "60\\n0 0 45\\n1 1 69\\n2 0 26\\n3 0 44\\n0\\n",
              "timestamp": 1681058532740
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532770
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "60\\n0 0 45\\n1 1 69\\n2 0 26\\n3 0 44\\n0\\n",
              "timestamp": 1681058532770
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681058532801
            }
          ],
          "commandError": "Expected the number of commands, but received: -1"
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 47
        },
        {
          "id": 1,
          "player": 1,
          "population": 71
        },
        {
          "id": 2,
          "player": 0,
          "population": 26
        },
        {
          "id": 3,
          "player": 0,
          "population": 46
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "61\\n0 0 46\\n1 1 70\\n2 0 26\\n3 0 45\\n0\\n",
              "timestamp": 1681058532801
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532831
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "61\\n0 0 46\\n1 1 70\\n2 0 26\\n3 0 45\\n0\\n",
              "timestamp": 1681058532831
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532862
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 48
        },
        {
          "id": 1,
          "player": 1,
          "population": 72
        },
        {
          "id": 2,
          "player": 0,
          "population": 27
        },
        {
          "id": 3,
          "player": 0,
          "population": 47
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "62\\n0 0 47\\n1 1 71\\n2 0 26\\n3 0 46\\n0\\n",
              "timestamp": 1681058532862
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532892
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "62\\n0 0 47\\n1 1 71\\n2 0 26\\n3 0 46\\n0\\n",
              "timestamp": 1681058532892
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532921
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 49
        },
        {
          "id": 1,
          "player": 1,
          "population": 73
        },
        {
          "id": 2,
          "player": 0,
          "population": 27
        },
        {
          "id": 3,
          "player": 0,
          "population": 48
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "63\\n0 0 48\\n1 1 72\\n2 0 27\\n3 0 47\\n0\\n",
              "timestamp": 1681058532922
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532952
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "63\\n0 0 48\\n1 1 72\\n2 0 27\\n3 0 47\\n0\\n",
              "timestamp": 1681058532952
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058532982
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 50
        },
        {
          "id": 1,
          "player": 1,
          "population": 74
        },
        {
          "id": 2,
          "player": 0,
          "population": 27
        },
        {
          "id": 3,
          "player": 0,
          "population": 49
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "64\\n0 0 49\\n1 1 73\\n2 0 27\\n3 0 48\\n0\\n",
              "timestamp": 1681058532983
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533013
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "64\\n0 0 49\\n1 1 73\\n2 0 27\\n3 0 48\\n0\\n",
              "timestamp": 1681058533013
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533043
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 51
        },
        {
          "id": 1,
          "player": 1,
          "population": 75
        },
        {
          "id": 2,
          "player": 0,
          "population": 28
        },
        {
          "id": 3,
          "player": 0,
          "population": 50
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "65\\n0 0 50\\n1 1 74\\n2 0 27\\n3 0 49\\n0\\n",
              "timestamp": 1681058533044
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533074
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "65\\n0 0 50\\n1 1 74\\n2 0 27\\n3 0 49\\n0\\n",
              "timestamp": 1681058533074
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533104
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 52
        },
        {
          "id": 1,
          "player": 1,
          "population": 76
        },
        {
          "id": 2,
          "player": 0,
          "population": 28
        },
        {
          "id": 3,
          "player": 0,
          "population": 51
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "66\\n0 0 51\\n1 1 75\\n2 0 28\\n3 0 50\\n0\\n",
              "timestamp": 1681058533104
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533135
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "66\\n0 0 51\\n1 1 75\\n2 0 28\\n3 0 50\\n0\\n",
              "timestamp": 1681058533135
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533165
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 53
        },
        {
          "id": 1,
          "player": 1,
          "population": 77
        },
        {
          "id": 2,
          "player": 0,
          "population": 28
        },
        {
          "id": 3,
          "player": 0,
          "population": 52
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "67\\n0 0 52\\n1 1 76\\n2 0 28\\n3 0 51\\n0\\n",
              "timestamp": 1681058533166
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533196
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "67\\n0 0 52\\n1 1 76\\n2 0 28\\n3 0 51\\n0\\n",
              "timestamp": 1681058533196
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533227
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 54
        },
        {
          "id": 1,
          "player": 1,
          "population": 78
        },
        {
          "id": 2,
          "player": 0,
          "population": 29
        },
        {
          "id": 3,
          "player": 0,
          "population": 53
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "68\\n0 0 53\\n1 1 77\\n2 0 28\\n3 0 52\\n0\\n",
              "timestamp": 1681058533227
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533258
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "68\\n0 0 53\\n1 1 77\\n2 0 28\\n3 0 52\\n0\\n",
              "timestamp": 1681058533258
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533288
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 55
        },
        {
          "id": 1,
          "player": 1,
          "population": 79
        },
        {
          "id": 2,
          "player": 0,
          "population": 29
        },
        {
          "id": 3,
          "player": 0,
          "population": 54
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "69\\n0 0 54\\n1 1 78\\n2 0 29\\n3 0 53\\n0\\n",
              "timestamp": 1681058533289
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533319
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "69\\n0 0 54\\n1 1 78\\n2 0 29\\n3 0 53\\n0\\n",
              "timestamp": 1681058533319
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533350
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 56
        },
        {
          "id": 1,
          "player": 1,
          "population": 80
        },
        {
          "id": 2,
          "player": 0,
          "population": 29
        },
        {
          "id": 3,
          "player": 0,
          "population": 55
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "70\\n0 0 55\\n1 1 79\\n2 0 29\\n3 0 54\\n0\\n",
              "timestamp": 1681058533350
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533380
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "70\\n0 0 55\\n1 1 79\\n2 0 29\\n3 0 54\\n0\\n",
              "timestamp": 1681058533381
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681058533411
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681058533411
            }
          ],
          "commandError": "Invalid planet id in line 1! They should be between 0 and 4: -1 1 1"
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 57
        },
        {
          "id": 1,
          "player": 1,
          "population": 81
        },
        {
          "id": 2,
          "player": 0,
          "population": 30
        },
        {
          "id": 3,
          "player": 0,
          "population": 56
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "71\\n0 0 56\\n1 1 80\\n2 0 29\\n3 0 55\\n0\\n",
              "timestamp": 1681058533412
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533442
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "71\\n0 0 56\\n1 1 80\\n2 0 29\\n3 0 55\\n0\\n",
              "timestamp": 1681058533442
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533472
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 58
        },
        {
          "id": 1,
          "player": 1,
          "population": 82
        },
        {
          "id": 2,
          "player": 0,
          "population": 30
        },
        {
          "id": 3,
          "player": 0,
          "population": 57
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "72\\n0 0 57\\n1 1 81\\n2 0 30\\n3 0 56\\n0\\n",
              "timestamp": 1681058533473
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533503
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "72\\n0 0 57\\n1 1 81\\n2 0 30\\n3 0 56\\n0\\n",
              "timestamp": 1681058533503
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533534
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 59
        },
        {
          "id": 1,
          "player": 1,
          "population": 83
        },
        {
          "id": 2,
          "player": 0,
          "population": 30
        },
        {
          "id": 3,
          "player": 0,
          "population": 58
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "73\\n0 0 58\\n1 1 82\\n2 0 30\\n3 0 57\\n0\\n",
              "timestamp": 1681058533534
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533565
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "73\\n0 0 58\\n1 1 82\\n2 0 30\\n3 0 57\\n0\\n",
              "timestamp": 1681058533565
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533595
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 60
        },
        {
          "id": 1,
          "player": 1,
          "population": 84
        },
        {
          "id": 2,
          "player": 0,
          "population": 31
        },
        {
          "id": 3,
          "player": 0,
          "population": 59
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "74\\n0 0 59\\n1 1 83\\n2 0 30\\n3 0 58\\n0\\n",
              "timestamp": 1681058533596
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533626
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "74\\n0 0 59\\n1 1 83\\n2 0 30\\n3 0 58\\n0\\n",
              "timestamp": 1681058533626
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533657
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 61
        },
        {
          "id": 1,
          "player": 1,
          "population": 85
        },
        {
          "id": 2,
          "player": 0,
          "population": 31
        },
        {
          "id": 3,
          "player": 0,
          "population": 60
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "75\\n0 0 60\\n1 1 84\\n2 0 31\\n3 0 59\\n0\\n",
              "timestamp": 1681058533657
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533688
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "75\\n0 0 60\\n1 1 84\\n2 0 31\\n3 0 59\\n0\\n",
              "timestamp": 1681058533688
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533718
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 62
        },
        {
          "id": 1,
          "player": 1,
          "population": 86
        },
        {
          "id": 2,
          "player": 0,
          "population": 31
        },
        {
          "id": 3,
          "player": 0,
          "population": 61
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "76\\n0 0 61\\n1 1 85\\n2 0 31\\n3 0 60\\n0\\n",
              "timestamp": 1681058533719
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533749
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "76\\n0 0 61\\n1 1 85\\n2 0 31\\n3 0 60\\n0\\n",
              "timestamp": 1681058533749
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533778
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 63
        },
        {
          "id": 1,
          "player": 1,
          "population": 87
        },
        {
          "id": 2,
          "player": 0,
          "population": 32
        },
        {
          "id": 3,
          "player": 0,
          "population": 62
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "77\\n0 0 62\\n1 1 86\\n2 0 31\\n3 0 61\\n0\\n",
              "timestamp": 1681058533779
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533809
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "77\\n0 0 62\\n1 1 86\\n2 0 31\\n3 0 61\\n0\\n",
              "timestamp": 1681058533809
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533839
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 64
        },
        {
          "id": 1,
          "player": 1,
          "population": 88
        },
        {
          "id": 2,
          "player": 0,
          "population": 32
        },
        {
          "id": 3,
          "player": 0,
          "population": 63
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "78\\n0 0 63\\n1 1 87\\n2 0 32\\n3 0 62\\n0\\n",
              "timestamp": 1681058533840
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533870
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "78\\n0 0 63\\n1 1 87\\n2 0 32\\n3 0 62\\n0\\n",
              "timestamp": 1681058533870
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533899
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 65
        },
        {
          "id": 1,
          "player": 1,
          "population": 89
        },
        {
          "id": 2,
          "player": 0,
          "population": 32
        },
        {
          "id": 3,
          "player": 0,
          "population": 64
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "79\\n0 0 64\\n1 1 88\\n2 0 32\\n3 0 63\\n0\\n",
              "timestamp": 1681058533900
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533930
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "79\\n0 0 64\\n1 1 88\\n2 0 32\\n3 0 63\\n0\\n",
              "timestamp": 1681058533930
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533959
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 66
        },
        {
          "id": 1,
          "player": 1,
          "population": 90
        },
        {
          "id": 2,
          "player": 0,
          "population": 33
        },
        {
          "id": 3,
          "player": 0,
          "population": 65
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "80\\n0 0 65\\n1 1 89\\n2 0 32\\n3 0 64\\n0\\n",
              "timestamp": 1681058533960
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058533990
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "80\\n0 0 65\\n1 1 89\\n2 0 32\\n3 0 64\\n0\\n",
              "timestamp": 1681058533990
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681058534021
            }
          ],
          "commandError": "Expected the number of commands, but received: -1"
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 67
        },
        {
          "id": 1,
          "player": 1,
          "population": 91
        },
        {
          "id": 2,
          "player": 0,
          "population": 33
        },
        {
          "id": 3,
          "player": 0,
          "population": 66
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "81\\n0 0 66\\n1 1 90\\n2 0 33\\n3 0 65\\n0\\n",
              "timestamp": 1681058534021
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534052
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "81\\n0 0 66\\n1 1 90\\n2 0 33\\n3 0 65\\n0\\n",
              "timestamp": 1681058534052
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534082
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 68
        },
        {
          "id": 1,
          "player": 1,
          "population": 92
        },
        {
          "id": 2,
          "player": 0,
          "population": 33
        },
        {
          "id": 3,
          "player": 0,
          "population": 67
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "82\\n0 0 67\\n1 1 91\\n2 0 33\\n3 0 66\\n0\\n",
              "timestamp": 1681058534084
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534114
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "82\\n0 0 67\\n1 1 91\\n2 0 33\\n3 0 66\\n0\\n",
              "timestamp": 1681058534114
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534145
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 69
        },
        {
          "id": 1,
          "player": 1,
          "population": 93
        },
        {
          "id": 2,
          "player": 0,
          "population": 34
        },
        {
          "id": 3,
          "player": 0,
          "population": 68
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "83\\n0 0 68\\n1 1 92\\n2 0 33\\n3 0 67\\n0\\n",
              "timestamp": 1681058534145
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534175
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "83\\n0 0 68\\n1 1 92\\n2 0 33\\n3 0 67\\n0\\n",
              "timestamp": 1681058534175
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534206
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 70
        },
        {
          "id": 1,
          "player": 1,
          "population": 94
        },
        {
          "id": 2,
          "player": 0,
          "population": 34
        },
        {
          "id": 3,
          "player": 0,
          "population": 69
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "84\\n0 0 69\\n1 1 93\\n2 0 34\\n3 0 68\\n0\\n",
              "timestamp": 1681058534206
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534236
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "84\\n0 0 69\\n1 1 93\\n2 0 34\\n3 0 68\\n0\\n",
              "timestamp": 1681058534236
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534267
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 71
        },
        {
          "id": 1,
          "player": 1,
          "population": 95
        },
        {
          "id": 2,
          "player": 0,
          "population": 34
        },
        {
          "id": 3,
          "player": 0,
          "population": 70
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "85\\n0 0 70\\n1 1 94\\n2 0 34\\n3 0 69\\n0\\n",
              "timestamp": 1681058534267
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534297
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "85\\n0 0 70\\n1 1 94\\n2 0 34\\n3 0 69\\n0\\n",
              "timestamp": 1681058534297
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534328
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 72
        },
        {
          "id": 1,
          "player": 1,
          "population": 96
        },
        {
          "id": 2,
          "player": 0,
          "population": 35
        },
        {
          "id": 3,
          "player": 0,
          "population": 71
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "86\\n0 0 71\\n1 1 95\\n2 0 34\\n3 0 70\\n0\\n",
              "timestamp": 1681058534328
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534359
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "86\\n0 0 71\\n1 1 95\\n2 0 34\\n3 0 70\\n0\\n",
              "timestamp": 1681058534359
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534389
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 73
        },
        {
          "id": 1,
          "player": 1,
          "population": 97
        },
        {
          "id": 2,
          "player": 0,
          "population": 35
        },
        {
          "id": 3,
          "player": 0,
          "population": 72
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "87\\n0 0 72\\n1 1 96\\n2 0 35\\n3 0 71\\n0\\n",
              "timestamp": 1681058534389
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534420
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "87\\n0 0 72\\n1 1 96\\n2 0 35\\n3 0 71\\n0\\n",
              "timestamp": 1681058534420
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534450
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 74
        },
        {
          "id": 1,
          "player": 1,
          "population": 98
        },
        {
          "id": 2,
          "player": 0,
          "population": 35
        },
        {
          "id": 3,
          "player": 0,
          "population": 73
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "88\\n0 0 73\\n1 1 97\\n2 0 35\\n3 0 72\\n0\\n",
              "timestamp": 1681058534450
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534481
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "88\\n0 0 73\\n1 1 97\\n2 0 35\\n3 0 72\\n0\\n",
              "timestamp": 1681058534481
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534511
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 75
        },
        {
          "id": 1,
          "player": 1,
          "population": 99
        },
        {
          "id": 2,
          "player": 0,
          "population": 36
        },
        {
          "id": 3,
          "player": 0,
          "population": 74
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "89\\n0 0 74\\n1 1 98\\n2 0 35\\n3 0 73\\n0\\n",
              "timestamp": 1681058534512
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534542
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "89\\n0 0 74\\n1 1 98\\n2 0 35\\n3 0 73\\n0\\n",
              "timestamp": 1681058534542
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534572
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 76
        },
        {
          "id": 1,
          "player": 1,
          "population": 100
        },
        {
          "id": 2,
          "player": 0,
          "population": 36
        },
        {
          "id": 3,
          "player": 0,
          "population": 75
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "90\\n0 0 75\\n1 1 99\\n2 0 36\\n3 0 74\\n0\\n",
              "timestamp": 1681058534573
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534603
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "90\\n0 0 75\\n1 1 99\\n2 0 36\\n3 0 74\\n0\\n",
              "timestamp": 1681058534603
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681058534632
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681058534633
            }
          ],
          "commandError": "Invalid planet id in line 1! They should be between 0 and 4: -1 1 1"
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 77
        },
        {
          "id": 1,
          "player": 1,
          "population": 101
        },
        {
          "id": 2,
          "player": 0,
          "population": 36
        },
        {
          "id": 3,
          "player": 0,
          "population": 76
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "91\\n0 0 76\\n1 1 100\\n2 0 36\\n3 0 75\\n0\\n",
              "timestamp": 1681058534633
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534664
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "91\\n0 0 76\\n1 1 100\\n2 0 36\\n3 0 75\\n0\\n",
              "timestamp": 1681058534664
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534694
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 78
        },
        {
          "id": 1,
          "player": 1,
          "population": 102
        },
        {
          "id": 2,
          "player": 0,
          "population": 37
        },
        {
          "id": 3,
          "player": 0,
          "population": 77
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "92\\n0 0 77\\n1 1 101\\n2 0 36\\n3 0 76\\n0\\n",
              "timestamp": 1681058534695
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534725
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "92\\n0 0 77\\n1 1 101\\n2 0 36\\n3 0 76\\n0\\n",
              "timestamp": 1681058534725
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534756
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 79
        },
        {
          "id": 1,
          "player": 1,
          "population": 103
        },
        {
          "id": 2,
          "player": 0,
          "population": 37
        },
        {
          "id": 3,
          "player": 0,
          "population": 78
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "93\\n0 0 78\\n1 1 102\\n2 0 37\\n3 0 77\\n0\\n",
              "timestamp": 1681058534756
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534785
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "93\\n0 0 78\\n1 1 102\\n2 0 37\\n3 0 77\\n0\\n",
              "timestamp": 1681058534786
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534816
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 80
        },
        {
          "id": 1,
          "player": 1,
          "population": 104
        },
        {
          "id": 2,
          "player": 0,
          "population": 37
        },
        {
          "id": 3,
          "player": 0,
          "population": 79
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "94\\n0 0 79\\n1 1 103\\n2 0 37\\n3 0 78\\n0\\n",
              "timestamp": 1681058534817
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534847
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "94\\n0 0 79\\n1 1 103\\n2 0 37\\n3 0 78\\n0\\n",
              "timestamp": 1681058534847
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534876
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 81
        },
        {
          "id": 1,
          "player": 1,
          "population": 105
        },
        {
          "id": 2,
          "player": 0,
          "population": 38
        },
        {
          "id": 3,
          "player": 0,
          "population": 80
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "95\\n0 0 80\\n1 1 104\\n2 0 37\\n3 0 79\\n0\\n",
              "timestamp": 1681058534877
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534907
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "95\\n0 0 80\\n1 1 104\\n2 0 37\\n3 0 79\\n0\\n",
              "timestamp": 1681058534907
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534938
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 82
        },
        {
          "id": 1,
          "player": 1,
          "population": 106
        },
        {
          "id": 2,
          "player": 0,
          "population": 38
        },
        {
          "id": 3,
          "player": 0,
          "population": 81
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "96\\n0 0 81\\n1 1 105\\n2 0 38\\n3 0 80\\n0\\n",
              "timestamp": 1681058534938
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534968
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "96\\n0 0 81\\n1 1 105\\n2 0 38\\n3 0 80\\n0\\n",
              "timestamp": 1681058534969
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058534999
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 83
        },
        {
          "id": 1,
          "player": 1,
          "population": 107
        },
        {
          "id": 2,
          "player": 0,
          "population": 38
        },
        {
          "id": 3,
          "player": 0,
          "population": 82
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "97\\n0 0 82\\n1 1 106\\n2 0 38\\n3 0 81\\n0\\n",
              "timestamp": 1681058534999
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058535030
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "97\\n0 0 82\\n1 1 106\\n2 0 38\\n3 0 81\\n0\\n",
              "timestamp": 1681058535030
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058535060
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 84
        },
        {
          "id": 1,
          "player": 1,
          "population": 108
        },
        {
          "id": 2,
          "player": 0,
          "population": 39
        },
        {
          "id": 3,
          "player": 0,
          "population": 83
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "98\\n0 0 83\\n1 1 107\\n2 0 38\\n3 0 82\\n0\\n",
              "timestamp": 1681058535061
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058535091
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "98\\n0 0 83\\n1 1 107\\n2 0 38\\n3 0 82\\n0\\n",
              "timestamp": 1681058535091
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058535121
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 85
        },
        {
          "id": 1,
          "player": 1,
          "population": 109
        },
        {
          "id": 2,
          "player": 0,
          "population": 39
        },
        {
          "id": 3,
          "player": 0,
          "population": 84
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "99\\n0 0 84\\n1 1 108\\n2 0 39\\n3 0 83\\n0\\n",
              "timestamp": 1681058535122
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058535152
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "99\\n0 0 84\\n1 1 108\\n2 0 39\\n3 0 83\\n0\\n",
              "timestamp": 1681058535152
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058535181
            }
          ]
        }
      }
    },
    {
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 86
        },
        {
          "id": 1,
          "player": 1,
          "population": 110
        },
        {
          "id": 2,
          "player": 0,
          "population": 39
        },
        {
          "id": 3,
          "player": 0,
          "population": 85
        }
      ],
      "troops": [],
      "messages": {
        "0": {
          "received": [
            {
              "message": "100\\n0 0 85\\n1 1 109\\n2 0 39\\n3 0 84\\n0\\n",
              "timestamp": 1681058535182
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681058535212
            }
          ]
        },
        "1": {
          "received": [
            {
              "message": "100\\n0 0 85\\n1 1 109\\n2 0 39\\n3 0 84\\n0\\n",
              "timestamp": 1681058535212
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681058535243
            }
          ],
          "commandError": "Expected the number of commands, but received: -1"
        }
      }
    }
  ]
}
`;
