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
        "size": 5,
        "production": 5,
        "player": 0
      },
      {
        "id": 1,
        "x": 150,
        "y": 150,
        "size": 5,
        "production": 5,
        "player": 1
      },
      {
        "id": 2,
        "x": 50,
        "y": 150,
        "size": 5,
        "production": 5,
        "player": null
      },
      {
        "id": 3,
        "x": 150,
        "y": 50,
        "size": 5,
        "production": 5,
        "player": null
      },
      {
        "id": 4,
        "x": 100,
        "y": 100,
        "size": 15,
        "production": 1,
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
      "tick": 0,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "START",
              "timestamp": 1682775823141
            },
            {
              "message": "0\\n5\\n50 50 5\\n150 150 5\\n50 150 5\\n150 50 5\\n100 100 1\\n0 14 10 10 7 \\n14 0 10 10 7 \\n10 10 0 14 7 \\n10 10 14 0 7 \\n7 7 7 7 0 \\n",
              "timestamp": 1682775823162
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1682775823151
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "START",
              "timestamp": 1682775823151
            },
            {
              "message": "1\\n5\\n50 50 5\\n150 150 5\\n50 150 5\\n150 50 5\\n100 100 1\\n0 14 10 10 7 \\n14 0 10 10 7 \\n10 10 0 14 7 \\n10 10 14 0 7 \\n7 7 7 7 0 \\n",
              "timestamp": 1682775823162
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1682775823162
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 1,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "1\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823164
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823174
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "1\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823175
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823185
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 2,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "2\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823185
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823196
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "2\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823196
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823206
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 3,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "3\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823207
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823218
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "3\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823218
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823228
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 4,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "4\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823229
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823239
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "4\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823239
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823249
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 5,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "5\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823249
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823259
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "5\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823259
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823269
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 6,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "6\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823270
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823280
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "6\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823280
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823290
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 7,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "7\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823290
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823301
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "7\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823301
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823311
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 8,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "8\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823312
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823322
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "8\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823323
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823333
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 9,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "9\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823333
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823343
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "9\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823343
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823353
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 10,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "10\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823354
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823364
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "10\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823364
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1682775823374
            },
            {
              "message": "-1 1 1",
              "timestamp": 1682775823374
            }
          ],
          "commandError": "Invalid planet id in line 1! They should be between 0 and 5: -1 1 1",
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 11,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "11\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823375
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823385
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "11\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823385
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823395
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 12,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "12\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823395
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823406
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "12\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823406
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823416
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 13,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "13\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823417
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823427
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "13\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823427
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823437
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 14,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "14\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823438
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823449
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "14\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823449
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823459
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 15,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "15\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823460
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823470
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "15\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823471
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823481
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 16,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "16\\n0 0 13\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823482
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1682775823492
            },
            {
              "message": "0 2 12",
              "timestamp": 1682775823492
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "16\\n0 0 13\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823492
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823503
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 17,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 1
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
      "bots": [
        {
          "received": [
            {
              "message": "17\\n0 0 1\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823503
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823514
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "17\\n0 0 1\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823514
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823524
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 18,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 1
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
      "bots": [
        {
          "received": [
            {
              "message": "18\\n0 0 1\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823524
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823535
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "18\\n0 0 1\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823535
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823545
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 19,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 1
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
      "bots": [
        {
          "received": [
            {
              "message": "19\\n0 0 1\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823545
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823556
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "19\\n0 0 1\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823556
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823566
            }
          ],
          "id": "1234abcd",
          "index": 1
        }
      ]
    },
    {
      "tick": 20,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 1
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
      "bots": [
        {
          "received": [
            {
              "message": "20\\n0 0 1\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823567
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823577
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [
            {
              "message": "20\\n0 0 1\\n1 1 13\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823577
            }
          ],
          "sent": [],
          "commandError": "Bot 1234abcd (#1) exited with code 1",
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 21,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
      "bots": [
        {
          "received": [
            {
              "message": "21\\n0 0 2\\n1 1 14\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823589
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823599
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 22,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
      "bots": [
        {
          "received": [
            {
              "message": "22\\n0 0 2\\n1 1 14\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823600
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823610
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 23,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
      "bots": [
        {
          "received": [
            {
              "message": "23\\n0 0 2\\n1 1 14\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823611
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823621
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 24,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
      "bots": [
        {
          "received": [
            {
              "message": "24\\n0 0 2\\n1 1 14\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823621
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823632
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 25,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
      "bots": [
        {
          "received": [
            {
              "message": "25\\n0 0 2\\n1 1 14\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823632
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823642
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 26,
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
        },
        {
          "id": 4,
          "player": null,
          "population": 50
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
          "progress": 10
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "26\\n0 0 3\\n1 1 15\\n2 -1 1\\n3 -1 1\\n4 -1 50\\n1\\n0 0 2 12 26\\n",
              "timestamp": 1682775823642
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823653
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 27,
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
          "player": 0,
          "population": 11
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "27\\n0 0 3\\n1 1 15\\n2 0 11\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823653
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823664
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 28,
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
          "player": 0,
          "population": 11
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "28\\n0 0 3\\n1 1 15\\n2 0 11\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823664
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823674
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 29,
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
          "player": 0,
          "population": 11
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "29\\n0 0 3\\n1 1 15\\n2 0 11\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823674
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823685
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 30,
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
          "player": 0,
          "population": 11
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "30\\n0 0 3\\n1 1 15\\n2 0 11\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823685
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823695
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 31,
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
          "player": 0,
          "population": 11
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "31\\n0 0 4\\n1 1 16\\n2 0 11\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823696
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823706
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 32,
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
          "player": 0,
          "population": 12
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "32\\n0 0 4\\n1 1 16\\n2 0 12\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823707
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823717
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 33,
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
          "player": 0,
          "population": 12
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "33\\n0 0 4\\n1 1 16\\n2 0 12\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823718
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823728
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 34,
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
          "player": 0,
          "population": 12
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "34\\n0 0 4\\n1 1 16\\n2 0 12\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823729
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823739
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 35,
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
          "player": 0,
          "population": 12
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "35\\n0 0 4\\n1 1 16\\n2 0 12\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823740
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823750
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 36,
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
          "player": 0,
          "population": 12
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "36\\n0 0 5\\n1 1 17\\n2 0 12\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823750
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823760
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 37,
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
          "player": 0,
          "population": 13
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "37\\n0 0 5\\n1 1 17\\n2 0 13\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823760
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823771
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 38,
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
          "player": 0,
          "population": 13
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "38\\n0 0 5\\n1 1 17\\n2 0 13\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823771
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823782
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 39,
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
          "player": 0,
          "population": 13
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "39\\n0 0 5\\n1 1 17\\n2 0 13\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823782
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823792
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 40,
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
          "player": 0,
          "population": 13
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "40\\n0 0 5\\n1 1 17\\n2 0 13\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823793
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823803
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 41,
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
          "player": 0,
          "population": 13
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "41\\n0 0 6\\n1 1 18\\n2 0 13\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823804
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823814
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 42,
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
          "player": 0,
          "population": 14
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "42\\n0 0 6\\n1 1 18\\n2 0 14\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823815
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823825
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 43,
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
          "player": 0,
          "population": 14
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "43\\n0 0 6\\n1 1 18\\n2 0 14\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823825
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823835
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 44,
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
          "player": 0,
          "population": 14
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "44\\n0 0 6\\n1 1 18\\n2 0 14\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823835
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823845
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 45,
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
          "player": 0,
          "population": 14
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "45\\n0 0 6\\n1 1 18\\n2 0 14\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823846
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823856
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 46,
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
          "player": 0,
          "population": 14
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "46\\n0 0 7\\n1 1 19\\n2 0 14\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823857
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823867
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 47,
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
          "player": 0,
          "population": 15
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "47\\n0 0 7\\n1 1 19\\n2 0 15\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823868
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823878
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 48,
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
          "player": 0,
          "population": 15
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "48\\n0 0 7\\n1 1 19\\n2 0 15\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823878
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823888
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 49,
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
          "player": 0,
          "population": 15
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "49\\n0 0 7\\n1 1 19\\n2 0 15\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823888
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823899
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 50,
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
          "player": 0,
          "population": 15
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "50\\n0 0 7\\n1 1 19\\n2 0 15\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823899
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823909
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 51,
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
          "player": 0,
          "population": 15
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "51\\n0 0 8\\n1 1 20\\n2 0 15\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823910
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823920
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 52,
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
          "player": 0,
          "population": 16
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "52\\n0 0 8\\n1 1 20\\n2 0 16\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823921
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823931
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 53,
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
          "player": 0,
          "population": 16
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "53\\n0 0 8\\n1 1 20\\n2 0 16\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823932
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823942
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 54,
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
          "player": 0,
          "population": 16
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "54\\n0 0 8\\n1 1 20\\n2 0 16\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823942
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823953
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 55,
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
          "player": 0,
          "population": 16
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "55\\n0 0 8\\n1 1 20\\n2 0 16\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823953
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823963
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 56,
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
          "player": 0,
          "population": 16
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "56\\n0 0 9\\n1 1 21\\n2 0 16\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823964
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823974
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 57,
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
          "player": 0,
          "population": 17
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "57\\n0 0 9\\n1 1 21\\n2 0 17\\n3 -1 1\\n4 -1 50\\n0\\n",
              "timestamp": 1682775823975
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1682775823985
            },
            {
              "message": "2 3 16",
              "timestamp": 1682775823985
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 58,
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
          "player": 0,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 1
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "58\\n0 0 9\\n1 1 21\\n2 0 1\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775823986
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775823996
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 59,
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
          "player": 0,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 2
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "59\\n0 0 9\\n1 1 21\\n2 0 1\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775823997
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824007
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 60,
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
          "player": 0,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 3
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "60\\n0 0 9\\n1 1 21\\n2 0 1\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824007
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824017
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 61,
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
          "player": 0,
          "population": 1
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 4
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "61\\n0 0 10\\n1 1 22\\n2 0 1\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824017
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824028
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 62,
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
          "player": 0,
          "population": 2
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 5
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "62\\n0 0 10\\n1 1 22\\n2 0 2\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824028
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824038
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 63,
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
          "player": 0,
          "population": 2
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 6
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "63\\n0 0 10\\n1 1 22\\n2 0 2\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824039
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824049
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 64,
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
          "player": 0,
          "population": 2
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 7
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "64\\n0 0 10\\n1 1 22\\n2 0 2\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824050
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824060
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 65,
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
          "player": 0,
          "population": 2
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 8
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "65\\n0 0 10\\n1 1 22\\n2 0 2\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824061
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824071
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 66,
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
          "player": 0,
          "population": 2
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 9
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "66\\n0 0 11\\n1 1 23\\n2 0 2\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824072
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824082
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 67,
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
          "player": 0,
          "population": 3
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 10
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "67\\n0 0 11\\n1 1 23\\n2 0 3\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824083
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824093
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 68,
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
          "player": 0,
          "population": 3
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 11
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "68\\n0 0 11\\n1 1 23\\n2 0 3\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824093
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824103
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 69,
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
          "player": 0,
          "population": 3
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 12
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "69\\n0 0 11\\n1 1 23\\n2 0 3\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824104
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824114
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 70,
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
          "player": 0,
          "population": 3
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 13
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "70\\n0 0 11\\n1 1 23\\n2 0 3\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824115
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824125
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 71,
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
          "population": 3
        },
        {
          "id": 3,
          "player": null,
          "population": 1
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [
        {
          "id": 1,
          "from": 2,
          "to": 3,
          "player": 0,
          "size": 16,
          "distance": 14,
          "progress": 14
        }
      ],
      "bots": [
        {
          "received": [
            {
              "message": "71\\n0 0 12\\n1 1 24\\n2 0 3\\n3 -1 1\\n4 -1 50\\n1\\n0 2 3 16 71\\n",
              "timestamp": 1682775824126
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824136
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 72,
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
          "population": 4
        },
        {
          "id": 3,
          "player": 0,
          "population": 15
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "72\\n0 0 12\\n1 1 24\\n2 0 4\\n3 0 15\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824137
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824147
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 73,
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
          "population": 4
        },
        {
          "id": 3,
          "player": 0,
          "population": 15
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "73\\n0 0 12\\n1 1 24\\n2 0 4\\n3 0 15\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824148
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824158
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 74,
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
          "population": 4
        },
        {
          "id": 3,
          "player": 0,
          "population": 15
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "74\\n0 0 12\\n1 1 24\\n2 0 4\\n3 0 15\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824159
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824169
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 75,
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
          "population": 4
        },
        {
          "id": 3,
          "player": 0,
          "population": 15
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "75\\n0 0 12\\n1 1 24\\n2 0 4\\n3 0 15\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824171
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824181
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 76,
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
          "population": 4
        },
        {
          "id": 3,
          "player": 0,
          "population": 15
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "76\\n0 0 13\\n1 1 25\\n2 0 4\\n3 0 15\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824182
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824192
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 77,
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
          "population": 5
        },
        {
          "id": 3,
          "player": 0,
          "population": 16
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "77\\n0 0 13\\n1 1 25\\n2 0 5\\n3 0 16\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824193
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824203
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 78,
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
          "population": 5
        },
        {
          "id": 3,
          "player": 0,
          "population": 16
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "78\\n0 0 13\\n1 1 25\\n2 0 5\\n3 0 16\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824204
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824214
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 79,
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
          "population": 5
        },
        {
          "id": 3,
          "player": 0,
          "population": 16
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "79\\n0 0 13\\n1 1 25\\n2 0 5\\n3 0 16\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824215
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824225
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 80,
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
          "population": 5
        },
        {
          "id": 3,
          "player": 0,
          "population": 16
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "80\\n0 0 13\\n1 1 25\\n2 0 5\\n3 0 16\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824225
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824235
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 81,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 14
        },
        {
          "id": 1,
          "player": 1,
          "population": 26
        },
        {
          "id": 2,
          "player": 0,
          "population": 5
        },
        {
          "id": 3,
          "player": 0,
          "population": 16
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "81\\n0 0 14\\n1 1 26\\n2 0 5\\n3 0 16\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824235
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824246
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 82,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 14
        },
        {
          "id": 1,
          "player": 1,
          "population": 26
        },
        {
          "id": 2,
          "player": 0,
          "population": 6
        },
        {
          "id": 3,
          "player": 0,
          "population": 17
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "82\\n0 0 14\\n1 1 26\\n2 0 6\\n3 0 17\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824246
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824256
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 83,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 14
        },
        {
          "id": 1,
          "player": 1,
          "population": 26
        },
        {
          "id": 2,
          "player": 0,
          "population": 6
        },
        {
          "id": 3,
          "player": 0,
          "population": 17
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "83\\n0 0 14\\n1 1 26\\n2 0 6\\n3 0 17\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824257
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824268
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 84,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 14
        },
        {
          "id": 1,
          "player": 1,
          "population": 26
        },
        {
          "id": 2,
          "player": 0,
          "population": 6
        },
        {
          "id": 3,
          "player": 0,
          "population": 17
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "84\\n0 0 14\\n1 1 26\\n2 0 6\\n3 0 17\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824268
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824278
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 85,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 14
        },
        {
          "id": 1,
          "player": 1,
          "population": 26
        },
        {
          "id": 2,
          "player": 0,
          "population": 6
        },
        {
          "id": 3,
          "player": 0,
          "population": 17
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "85\\n0 0 14\\n1 1 26\\n2 0 6\\n3 0 17\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824279
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824289
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 86,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 15
        },
        {
          "id": 1,
          "player": 1,
          "population": 27
        },
        {
          "id": 2,
          "player": 0,
          "population": 6
        },
        {
          "id": 3,
          "player": 0,
          "population": 17
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "86\\n0 0 15\\n1 1 27\\n2 0 6\\n3 0 17\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824290
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824300
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 87,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 15
        },
        {
          "id": 1,
          "player": 1,
          "population": 27
        },
        {
          "id": 2,
          "player": 0,
          "population": 7
        },
        {
          "id": 3,
          "player": 0,
          "population": 18
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "87\\n0 0 15\\n1 1 27\\n2 0 7\\n3 0 18\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824301
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824311
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 88,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 15
        },
        {
          "id": 1,
          "player": 1,
          "population": 27
        },
        {
          "id": 2,
          "player": 0,
          "population": 7
        },
        {
          "id": 3,
          "player": 0,
          "population": 18
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "88\\n0 0 15\\n1 1 27\\n2 0 7\\n3 0 18\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824312
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824322
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 89,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 15
        },
        {
          "id": 1,
          "player": 1,
          "population": 27
        },
        {
          "id": 2,
          "player": 0,
          "population": 7
        },
        {
          "id": 3,
          "player": 0,
          "population": 18
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "89\\n0 0 15\\n1 1 27\\n2 0 7\\n3 0 18\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824322
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824333
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 90,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 15
        },
        {
          "id": 1,
          "player": 1,
          "population": 27
        },
        {
          "id": 2,
          "player": 0,
          "population": 7
        },
        {
          "id": 3,
          "player": 0,
          "population": 18
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "90\\n0 0 15\\n1 1 27\\n2 0 7\\n3 0 18\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824333
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824344
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 91,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 16
        },
        {
          "id": 1,
          "player": 1,
          "population": 28
        },
        {
          "id": 2,
          "player": 0,
          "population": 7
        },
        {
          "id": 3,
          "player": 0,
          "population": 18
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "91\\n0 0 16\\n1 1 28\\n2 0 7\\n3 0 18\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824344
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824354
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 92,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 16
        },
        {
          "id": 1,
          "player": 1,
          "population": 28
        },
        {
          "id": 2,
          "player": 0,
          "population": 8
        },
        {
          "id": 3,
          "player": 0,
          "population": 19
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "92\\n0 0 16\\n1 1 28\\n2 0 8\\n3 0 19\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824355
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824365
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 93,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 16
        },
        {
          "id": 1,
          "player": 1,
          "population": 28
        },
        {
          "id": 2,
          "player": 0,
          "population": 8
        },
        {
          "id": 3,
          "player": 0,
          "population": 19
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "93\\n0 0 16\\n1 1 28\\n2 0 8\\n3 0 19\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824366
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824376
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 94,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 16
        },
        {
          "id": 1,
          "player": 1,
          "population": 28
        },
        {
          "id": 2,
          "player": 0,
          "population": 8
        },
        {
          "id": 3,
          "player": 0,
          "population": 19
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "94\\n0 0 16\\n1 1 28\\n2 0 8\\n3 0 19\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824377
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824387
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 95,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 16
        },
        {
          "id": 1,
          "player": 1,
          "population": 28
        },
        {
          "id": 2,
          "player": 0,
          "population": 8
        },
        {
          "id": 3,
          "player": 0,
          "population": 19
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "95\\n0 0 16\\n1 1 28\\n2 0 8\\n3 0 19\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824388
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824398
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 96,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 17
        },
        {
          "id": 1,
          "player": 1,
          "population": 29
        },
        {
          "id": 2,
          "player": 0,
          "population": 8
        },
        {
          "id": 3,
          "player": 0,
          "population": 19
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "96\\n0 0 17\\n1 1 29\\n2 0 8\\n3 0 19\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824399
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824409
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 97,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 17
        },
        {
          "id": 1,
          "player": 1,
          "population": 29
        },
        {
          "id": 2,
          "player": 0,
          "population": 9
        },
        {
          "id": 3,
          "player": 0,
          "population": 20
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "97\\n0 0 17\\n1 1 29\\n2 0 9\\n3 0 20\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824410
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824420
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 98,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 17
        },
        {
          "id": 1,
          "player": 1,
          "population": 29
        },
        {
          "id": 2,
          "player": 0,
          "population": 9
        },
        {
          "id": 3,
          "player": 0,
          "population": 20
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "98\\n0 0 17\\n1 1 29\\n2 0 9\\n3 0 20\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824421
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824431
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 99,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 17
        },
        {
          "id": 1,
          "player": 1,
          "population": 29
        },
        {
          "id": 2,
          "player": 0,
          "population": 9
        },
        {
          "id": 3,
          "player": 0,
          "population": 20
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "99\\n0 0 17\\n1 1 29\\n2 0 9\\n3 0 20\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824431
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824441
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    },
    {
      "tick": 100,
      "planets": [
        {
          "id": 0,
          "player": 0,
          "population": 17
        },
        {
          "id": 1,
          "player": 1,
          "population": 29
        },
        {
          "id": 2,
          "player": 0,
          "population": 9
        },
        {
          "id": 3,
          "player": 0,
          "population": 20
        },
        {
          "id": 4,
          "player": null,
          "population": 50
        }
      ],
      "troops": [],
      "bots": [
        {
          "received": [
            {
              "message": "100\\n0 0 17\\n1 1 29\\n2 0 9\\n3 0 20\\n4 -1 50\\n0\\n",
              "timestamp": 1682775824441
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1682775824451
            }
          ],
          "id": "abcd1234",
          "index": 0
        },
        {
          "received": [],
          "sent": [],
          "id": "1234abcd",
          "index": 1,
          "offline": true
        }
      ]
    }
  ]
}
`;
