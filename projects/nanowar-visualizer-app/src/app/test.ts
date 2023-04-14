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
        "id": 0,
        "name": "bot1"
      },
      {
        "id": 1,
        "name": "bot2"
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
        "bot1": {
          "received": [
            {
              "message": "START",
              "timestamp": 1681028270636
            },
            {
              "message": "0\\n4\\n50 50 1\\n150 150 1\\n50 150 3\\n150 50 1\\n0 14 10 10 \\n14 0 10 10 \\n10 10 0 14 \\n10 10 14 0 \\n",
              "timestamp": 1681028270698
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1681028270666
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "START",
              "timestamp": 1681028270666
            },
            {
              "message": "1\\n4\\n50 50 1\\n150 150 1\\n50 150 3\\n150 50 1\\n0 14 10 10 \\n14 0 10 10 \\n10 10 0 14 \\n10 10 14 0 \\n",
              "timestamp": 1681028270698
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1681028270697
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
        "bot1": {
          "received": [
            {
              "message": "1\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681028270702
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028270733
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "1\\n0 0 10\\n1 1 10\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681028270733
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028270764
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
        "bot1": {
          "received": [
            {
              "message": "2\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681028270765
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028270796
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "2\\n0 0 11\\n1 1 11\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681028270796
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028270826
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
        "bot1": {
          "received": [
            {
              "message": "3\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681028270827
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028270857
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "3\\n0 0 12\\n1 1 12\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681028270857
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028270888
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
        "bot1": {
          "received": [
            {
              "message": "4\\n0 0 13\\n1 1 13\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681028270890
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681028270920
            },
            {
              "message": "0 2 12",
              "timestamp": 1681028270921
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "4\\n0 0 13\\n1 1 13\\n2 -1 1\\n3 -1 1\\n0\\n",
              "timestamp": 1681028270921
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028270951
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
        "bot1": {
          "received": [
            {
              "message": "5\\n0 0 2\\n1 1 14\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028270952
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028270982
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "5\\n0 0 2\\n1 1 14\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028270983
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271012
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
        "bot1": {
          "received": [
            {
              "message": "6\\n0 0 3\\n1 1 15\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271013
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271043
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "6\\n0 0 3\\n1 1 15\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271044
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271073
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
        "bot1": {
          "received": [
            {
              "message": "7\\n0 0 4\\n1 1 16\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271074
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271103
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "7\\n0 0 4\\n1 1 16\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271103
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271134
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
        "bot1": {
          "received": [
            {
              "message": "8\\n0 0 5\\n1 1 17\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271134
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271165
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "8\\n0 0 5\\n1 1 17\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271165
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271196
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
        "bot1": {
          "received": [
            {
              "message": "9\\n0 0 6\\n1 1 18\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271196
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271227
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "9\\n0 0 6\\n1 1 18\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271227
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271257
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
        "bot1": {
          "received": [
            {
              "message": "10\\n0 0 7\\n1 1 19\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271258
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271289
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "10\\n0 0 7\\n1 1 19\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271289
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681028271319
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681028271319
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
        "bot1": {
          "received": [
            {
              "message": "11\\n0 0 8\\n1 1 20\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271320
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271351
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "11\\n0 0 8\\n1 1 20\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271351
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271381
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
        "bot1": {
          "received": [
            {
              "message": "12\\n0 0 9\\n1 1 21\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271382
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271412
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "12\\n0 0 9\\n1 1 21\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271413
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271443
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
        "bot1": {
          "received": [
            {
              "message": "13\\n0 0 10\\n1 1 22\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271444
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271473
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "13\\n0 0 10\\n1 1 22\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271473
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271504
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
        "bot1": {
          "received": [
            {
              "message": "14\\n0 0 11\\n1 1 23\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271504
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271535
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "14\\n0 0 11\\n1 1 23\\n2 -1 1\\n3 -1 1\\n1\\n0 0 2 12 14\\n",
              "timestamp": 1681028271535
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271565
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
        "bot1": {
          "received": [
            {
              "message": "15\\n0 0 12\\n1 1 24\\n2 0 11\\n3 -1 1\\n0\\n",
              "timestamp": 1681028271566
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271596
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "15\\n0 0 12\\n1 1 24\\n2 0 11\\n3 -1 1\\n0\\n",
              "timestamp": 1681028271597
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271627
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
        "bot1": {
          "received": [
            {
              "message": "16\\n0 0 13\\n1 1 25\\n2 0 11\\n3 -1 1\\n0\\n",
              "timestamp": 1681028271628
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681028271657
            },
            {
              "message": "0 3 12",
              "timestamp": 1681028271657
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "16\\n0 0 13\\n1 1 25\\n2 0 11\\n3 -1 1\\n0\\n",
              "timestamp": 1681028271657
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271688
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
        "bot1": {
          "received": [
            {
              "message": "17\\n0 0 2\\n1 1 26\\n2 0 11\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271688
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271718
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "17\\n0 0 2\\n1 1 26\\n2 0 11\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271719
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271749
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
        "bot1": {
          "received": [
            {
              "message": "18\\n0 0 3\\n1 1 27\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271750
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271780
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "18\\n0 0 3\\n1 1 27\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271780
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271811
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
        "bot1": {
          "received": [
            {
              "message": "19\\n0 0 4\\n1 1 28\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271811
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271842
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "19\\n0 0 4\\n1 1 28\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271842
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271872
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
        "bot1": {
          "received": [
            {
              "message": "20\\n0 0 5\\n1 1 29\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271873
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271902
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "20\\n0 0 5\\n1 1 29\\n2 0 12\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271902
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681028271932
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
        "bot1": {
          "received": [
            {
              "message": "21\\n0 0 6\\n1 1 30\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271933
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271963
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "21\\n0 0 6\\n1 1 30\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271964
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028271994
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
        "bot1": {
          "received": [
            {
              "message": "22\\n0 0 7\\n1 1 31\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028271996
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272025
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "22\\n0 0 7\\n1 1 31\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028272025
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272056
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
        "bot1": {
          "received": [
            {
              "message": "23\\n0 0 8\\n1 1 32\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028272056
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272087
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "23\\n0 0 8\\n1 1 32\\n2 0 13\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028272087
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272117
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
        "bot1": {
          "received": [
            {
              "message": "24\\n0 0 9\\n1 1 33\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028272118
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272148
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "24\\n0 0 9\\n1 1 33\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028272148
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272178
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
        "bot1": {
          "received": [
            {
              "message": "25\\n0 0 10\\n1 1 34\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028272179
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272209
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "25\\n0 0 10\\n1 1 34\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028272209
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272240
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
        "bot1": {
          "received": [
            {
              "message": "26\\n0 0 11\\n1 1 35\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028272240
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272270
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "26\\n0 0 11\\n1 1 35\\n2 0 14\\n3 -1 1\\n1\\n0 0 3 12 26\\n",
              "timestamp": 1681028272271
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272301
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
        "bot1": {
          "received": [
            {
              "message": "27\\n0 0 12\\n1 1 36\\n2 0 15\\n3 0 11\\n0\\n",
              "timestamp": 1681028272302
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272332
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "27\\n0 0 12\\n1 1 36\\n2 0 15\\n3 0 11\\n0\\n",
              "timestamp": 1681028272332
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272362
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
        "bot1": {
          "received": [
            {
              "message": "28\\n0 0 13\\n1 1 37\\n2 0 15\\n3 0 12\\n0\\n",
              "timestamp": 1681028272363
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272393
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "28\\n0 0 13\\n1 1 37\\n2 0 15\\n3 0 12\\n0\\n",
              "timestamp": 1681028272393
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272424
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
        "bot1": {
          "received": [
            {
              "message": "29\\n0 0 14\\n1 1 38\\n2 0 15\\n3 0 13\\n0\\n",
              "timestamp": 1681028272424
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272455
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "29\\n0 0 14\\n1 1 38\\n2 0 15\\n3 0 13\\n0\\n",
              "timestamp": 1681028272455
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272485
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
        "bot1": {
          "received": [
            {
              "message": "30\\n0 0 15\\n1 1 39\\n2 0 16\\n3 0 14\\n0\\n",
              "timestamp": 1681028272486
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272516
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "30\\n0 0 15\\n1 1 39\\n2 0 16\\n3 0 14\\n0\\n",
              "timestamp": 1681028272516
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681028272546
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681028272547
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
        "bot1": {
          "received": [
            {
              "message": "31\\n0 0 16\\n1 1 40\\n2 0 16\\n3 0 15\\n0\\n",
              "timestamp": 1681028272547
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272578
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "31\\n0 0 16\\n1 1 40\\n2 0 16\\n3 0 15\\n0\\n",
              "timestamp": 1681028272578
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272608
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
        "bot1": {
          "received": [
            {
              "message": "32\\n0 0 17\\n1 1 41\\n2 0 16\\n3 0 16\\n0\\n",
              "timestamp": 1681028272609
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272639
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "32\\n0 0 17\\n1 1 41\\n2 0 16\\n3 0 16\\n0\\n",
              "timestamp": 1681028272639
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272669
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
        "bot1": {
          "received": [
            {
              "message": "33\\n0 0 18\\n1 1 42\\n2 0 17\\n3 0 17\\n0\\n",
              "timestamp": 1681028272670
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272700
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "33\\n0 0 18\\n1 1 42\\n2 0 17\\n3 0 17\\n0\\n",
              "timestamp": 1681028272700
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272731
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
        "bot1": {
          "received": [
            {
              "message": "34\\n0 0 19\\n1 1 43\\n2 0 17\\n3 0 18\\n0\\n",
              "timestamp": 1681028272731
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272762
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "34\\n0 0 19\\n1 1 43\\n2 0 17\\n3 0 18\\n0\\n",
              "timestamp": 1681028272762
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272792
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
        "bot1": {
          "received": [
            {
              "message": "35\\n0 0 20\\n1 1 44\\n2 0 17\\n3 0 19\\n0\\n",
              "timestamp": 1681028272793
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272822
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "35\\n0 0 20\\n1 1 44\\n2 0 17\\n3 0 19\\n0\\n",
              "timestamp": 1681028272822
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272852
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
        "bot1": {
          "received": [
            {
              "message": "36\\n0 0 21\\n1 1 45\\n2 0 18\\n3 0 20\\n0\\n",
              "timestamp": 1681028272853
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272883
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "36\\n0 0 21\\n1 1 45\\n2 0 18\\n3 0 20\\n0\\n",
              "timestamp": 1681028272883
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272914
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
        "bot1": {
          "received": [
            {
              "message": "37\\n0 0 22\\n1 1 46\\n2 0 18\\n3 0 21\\n0\\n",
              "timestamp": 1681028272914
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272945
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "37\\n0 0 22\\n1 1 46\\n2 0 18\\n3 0 21\\n0\\n",
              "timestamp": 1681028272945
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028272975
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
        "bot1": {
          "received": [
            {
              "message": "38\\n0 0 23\\n1 1 47\\n2 0 18\\n3 0 22\\n0\\n",
              "timestamp": 1681028272976
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273006
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "38\\n0 0 23\\n1 1 47\\n2 0 18\\n3 0 22\\n0\\n",
              "timestamp": 1681028273006
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273036
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
        "bot1": {
          "received": [
            {
              "message": "39\\n0 0 24\\n1 1 48\\n2 0 19\\n3 0 23\\n0\\n",
              "timestamp": 1681028273037
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273067
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "39\\n0 0 24\\n1 1 48\\n2 0 19\\n3 0 23\\n0\\n",
              "timestamp": 1681028273068
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273098
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
        "bot1": {
          "received": [
            {
              "message": "40\\n0 0 25\\n1 1 49\\n2 0 19\\n3 0 24\\n0\\n",
              "timestamp": 1681028273098
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273129
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "40\\n0 0 25\\n1 1 49\\n2 0 19\\n3 0 24\\n0\\n",
              "timestamp": 1681028273129
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681028273159
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
        "bot1": {
          "received": [
            {
              "message": "41\\n0 0 26\\n1 1 50\\n2 0 19\\n3 0 25\\n0\\n",
              "timestamp": 1681028273160
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273190
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "41\\n0 0 26\\n1 1 50\\n2 0 19\\n3 0 25\\n0\\n",
              "timestamp": 1681028273190
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273221
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
        "bot1": {
          "received": [
            {
              "message": "42\\n0 0 27\\n1 1 51\\n2 0 20\\n3 0 26\\n0\\n",
              "timestamp": 1681028273221
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273251
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "42\\n0 0 27\\n1 1 51\\n2 0 20\\n3 0 26\\n0\\n",
              "timestamp": 1681028273252
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273281
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
        "bot1": {
          "received": [
            {
              "message": "43\\n0 0 28\\n1 1 52\\n2 0 20\\n3 0 27\\n0\\n",
              "timestamp": 1681028273282
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273312
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "43\\n0 0 28\\n1 1 52\\n2 0 20\\n3 0 27\\n0\\n",
              "timestamp": 1681028273312
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273342
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
        "bot1": {
          "received": [
            {
              "message": "44\\n0 0 29\\n1 1 53\\n2 0 20\\n3 0 28\\n0\\n",
              "timestamp": 1681028273343
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273373
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "44\\n0 0 29\\n1 1 53\\n2 0 20\\n3 0 28\\n0\\n",
              "timestamp": 1681028273373
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273404
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
        "bot1": {
          "received": [
            {
              "message": "45\\n0 0 30\\n1 1 54\\n2 0 21\\n3 0 29\\n0\\n",
              "timestamp": 1681028273404
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273434
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "45\\n0 0 30\\n1 1 54\\n2 0 21\\n3 0 29\\n0\\n",
              "timestamp": 1681028273435
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273464
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
        "bot1": {
          "received": [
            {
              "message": "46\\n0 0 31\\n1 1 55\\n2 0 21\\n3 0 30\\n0\\n",
              "timestamp": 1681028273464
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273495
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "46\\n0 0 31\\n1 1 55\\n2 0 21\\n3 0 30\\n0\\n",
              "timestamp": 1681028273495
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273525
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
        "bot1": {
          "received": [
            {
              "message": "47\\n0 0 32\\n1 1 56\\n2 0 21\\n3 0 31\\n0\\n",
              "timestamp": 1681028273526
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273556
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "47\\n0 0 32\\n1 1 56\\n2 0 21\\n3 0 31\\n0\\n",
              "timestamp": 1681028273556
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273587
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
        "bot1": {
          "received": [
            {
              "message": "48\\n0 0 33\\n1 1 57\\n2 0 22\\n3 0 32\\n0\\n",
              "timestamp": 1681028273587
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273617
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "48\\n0 0 33\\n1 1 57\\n2 0 22\\n3 0 32\\n0\\n",
              "timestamp": 1681028273618
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273648
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
        "bot1": {
          "received": [
            {
              "message": "49\\n0 0 34\\n1 1 58\\n2 0 22\\n3 0 33\\n0\\n",
              "timestamp": 1681028273648
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273679
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "49\\n0 0 34\\n1 1 58\\n2 0 22\\n3 0 33\\n0\\n",
              "timestamp": 1681028273679
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273709
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
        "bot1": {
          "received": [
            {
              "message": "50\\n0 0 35\\n1 1 59\\n2 0 22\\n3 0 34\\n0\\n",
              "timestamp": 1681028273710
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273739
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "50\\n0 0 35\\n1 1 59\\n2 0 22\\n3 0 34\\n0\\n",
              "timestamp": 1681028273739
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681028273770
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681028273770
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
        "bot1": {
          "received": [
            {
              "message": "51\\n0 0 36\\n1 1 60\\n2 0 23\\n3 0 35\\n0\\n",
              "timestamp": 1681028273770
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273800
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "51\\n0 0 36\\n1 1 60\\n2 0 23\\n3 0 35\\n0\\n",
              "timestamp": 1681028273801
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273831
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
        "bot1": {
          "received": [
            {
              "message": "52\\n0 0 37\\n1 1 61\\n2 0 23\\n3 0 36\\n0\\n",
              "timestamp": 1681028273831
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273862
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "52\\n0 0 37\\n1 1 61\\n2 0 23\\n3 0 36\\n0\\n",
              "timestamp": 1681028273862
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273892
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
        "bot1": {
          "received": [
            {
              "message": "53\\n0 0 38\\n1 1 62\\n2 0 23\\n3 0 37\\n0\\n",
              "timestamp": 1681028273893
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273923
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "53\\n0 0 38\\n1 1 62\\n2 0 23\\n3 0 37\\n0\\n",
              "timestamp": 1681028273923
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273954
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
        "bot1": {
          "received": [
            {
              "message": "54\\n0 0 39\\n1 1 63\\n2 0 24\\n3 0 38\\n0\\n",
              "timestamp": 1681028273954
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028273984
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "54\\n0 0 39\\n1 1 63\\n2 0 24\\n3 0 38\\n0\\n",
              "timestamp": 1681028273985
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274015
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
        "bot1": {
          "received": [
            {
              "message": "55\\n0 0 40\\n1 1 64\\n2 0 24\\n3 0 39\\n0\\n",
              "timestamp": 1681028274015
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274046
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "55\\n0 0 40\\n1 1 64\\n2 0 24\\n3 0 39\\n0\\n",
              "timestamp": 1681028274046
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274076
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
        "bot1": {
          "received": [
            {
              "message": "56\\n0 0 41\\n1 1 65\\n2 0 24\\n3 0 40\\n0\\n",
              "timestamp": 1681028274077
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274107
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "56\\n0 0 41\\n1 1 65\\n2 0 24\\n3 0 40\\n0\\n",
              "timestamp": 1681028274107
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274138
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
        "bot1": {
          "received": [
            {
              "message": "57\\n0 0 42\\n1 1 66\\n2 0 25\\n3 0 41\\n0\\n",
              "timestamp": 1681028274138
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274168
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "57\\n0 0 42\\n1 1 66\\n2 0 25\\n3 0 41\\n0\\n",
              "timestamp": 1681028274169
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274198
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
        "bot1": {
          "received": [
            {
              "message": "58\\n0 0 43\\n1 1 67\\n2 0 25\\n3 0 42\\n0\\n",
              "timestamp": 1681028274199
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274228
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "58\\n0 0 43\\n1 1 67\\n2 0 25\\n3 0 42\\n0\\n",
              "timestamp": 1681028274228
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274259
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
        "bot1": {
          "received": [
            {
              "message": "59\\n0 0 44\\n1 1 68\\n2 0 25\\n3 0 43\\n0\\n",
              "timestamp": 1681028274259
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274289
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "59\\n0 0 44\\n1 1 68\\n2 0 25\\n3 0 43\\n0\\n",
              "timestamp": 1681028274290
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274319
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
        "bot1": {
          "received": [
            {
              "message": "60\\n0 0 45\\n1 1 69\\n2 0 26\\n3 0 44\\n0\\n",
              "timestamp": 1681028274320
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274350
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "60\\n0 0 45\\n1 1 69\\n2 0 26\\n3 0 44\\n0\\n",
              "timestamp": 1681028274350
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681028274380
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
        "bot1": {
          "received": [
            {
              "message": "61\\n0 0 46\\n1 1 70\\n2 0 26\\n3 0 45\\n0\\n",
              "timestamp": 1681028274381
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274411
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "61\\n0 0 46\\n1 1 70\\n2 0 26\\n3 0 45\\n0\\n",
              "timestamp": 1681028274412
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274441
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
        "bot1": {
          "received": [
            {
              "message": "62\\n0 0 47\\n1 1 71\\n2 0 26\\n3 0 46\\n0\\n",
              "timestamp": 1681028274441
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274472
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "62\\n0 0 47\\n1 1 71\\n2 0 26\\n3 0 46\\n0\\n",
              "timestamp": 1681028274472
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274502
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
        "bot1": {
          "received": [
            {
              "message": "63\\n0 0 48\\n1 1 72\\n2 0 27\\n3 0 47\\n0\\n",
              "timestamp": 1681028274503
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274533
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "63\\n0 0 48\\n1 1 72\\n2 0 27\\n3 0 47\\n0\\n",
              "timestamp": 1681028274533
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274564
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
        "bot1": {
          "received": [
            {
              "message": "64\\n0 0 49\\n1 1 73\\n2 0 27\\n3 0 48\\n0\\n",
              "timestamp": 1681028274564
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274595
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "64\\n0 0 49\\n1 1 73\\n2 0 27\\n3 0 48\\n0\\n",
              "timestamp": 1681028274595
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274625
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
        "bot1": {
          "received": [
            {
              "message": "65\\n0 0 50\\n1 1 74\\n2 0 27\\n3 0 49\\n0\\n",
              "timestamp": 1681028274626
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274655
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "65\\n0 0 50\\n1 1 74\\n2 0 27\\n3 0 49\\n0\\n",
              "timestamp": 1681028274655
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274686
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
        "bot1": {
          "received": [
            {
              "message": "66\\n0 0 51\\n1 1 75\\n2 0 28\\n3 0 50\\n0\\n",
              "timestamp": 1681028274686
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274716
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "66\\n0 0 51\\n1 1 75\\n2 0 28\\n3 0 50\\n0\\n",
              "timestamp": 1681028274717
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274747
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
        "bot1": {
          "received": [
            {
              "message": "67\\n0 0 52\\n1 1 76\\n2 0 28\\n3 0 51\\n0\\n",
              "timestamp": 1681028274747
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274778
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "67\\n0 0 52\\n1 1 76\\n2 0 28\\n3 0 51\\n0\\n",
              "timestamp": 1681028274778
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274808
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
        "bot1": {
          "received": [
            {
              "message": "68\\n0 0 53\\n1 1 77\\n2 0 28\\n3 0 52\\n0\\n",
              "timestamp": 1681028274809
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274839
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "68\\n0 0 53\\n1 1 77\\n2 0 28\\n3 0 52\\n0\\n",
              "timestamp": 1681028274839
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274869
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
        "bot1": {
          "received": [
            {
              "message": "69\\n0 0 54\\n1 1 78\\n2 0 29\\n3 0 53\\n0\\n",
              "timestamp": 1681028274870
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274900
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "69\\n0 0 54\\n1 1 78\\n2 0 29\\n3 0 53\\n0\\n",
              "timestamp": 1681028274900
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274931
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
        "bot1": {
          "received": [
            {
              "message": "70\\n0 0 55\\n1 1 79\\n2 0 29\\n3 0 54\\n0\\n",
              "timestamp": 1681028274931
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028274961
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "70\\n0 0 55\\n1 1 79\\n2 0 29\\n3 0 54\\n0\\n",
              "timestamp": 1681028274961
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681028274992
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681028274992
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
        "bot1": {
          "received": [
            {
              "message": "71\\n0 0 56\\n1 1 80\\n2 0 29\\n3 0 55\\n0\\n",
              "timestamp": 1681028274992
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275023
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "71\\n0 0 56\\n1 1 80\\n2 0 29\\n3 0 55\\n0\\n",
              "timestamp": 1681028275023
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275053
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
        "bot1": {
          "received": [
            {
              "message": "72\\n0 0 57\\n1 1 81\\n2 0 30\\n3 0 56\\n0\\n",
              "timestamp": 1681028275053
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275084
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "72\\n0 0 57\\n1 1 81\\n2 0 30\\n3 0 56\\n0\\n",
              "timestamp": 1681028275084
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275114
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
        "bot1": {
          "received": [
            {
              "message": "73\\n0 0 58\\n1 1 82\\n2 0 30\\n3 0 57\\n0\\n",
              "timestamp": 1681028275115
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275145
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "73\\n0 0 58\\n1 1 82\\n2 0 30\\n3 0 57\\n0\\n",
              "timestamp": 1681028275145
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275175
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
        "bot1": {
          "received": [
            {
              "message": "74\\n0 0 59\\n1 1 83\\n2 0 30\\n3 0 58\\n0\\n",
              "timestamp": 1681028275176
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275206
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "74\\n0 0 59\\n1 1 83\\n2 0 30\\n3 0 58\\n0\\n",
              "timestamp": 1681028275206
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275236
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
        "bot1": {
          "received": [
            {
              "message": "75\\n0 0 60\\n1 1 84\\n2 0 31\\n3 0 59\\n0\\n",
              "timestamp": 1681028275237
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275267
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "75\\n0 0 60\\n1 1 84\\n2 0 31\\n3 0 59\\n0\\n",
              "timestamp": 1681028275267
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275298
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
        "bot1": {
          "received": [
            {
              "message": "76\\n0 0 61\\n1 1 85\\n2 0 31\\n3 0 60\\n0\\n",
              "timestamp": 1681028275298
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275328
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "76\\n0 0 61\\n1 1 85\\n2 0 31\\n3 0 60\\n0\\n",
              "timestamp": 1681028275328
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275359
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
        "bot1": {
          "received": [
            {
              "message": "77\\n0 0 62\\n1 1 86\\n2 0 31\\n3 0 61\\n0\\n",
              "timestamp": 1681028275359
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275390
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "77\\n0 0 62\\n1 1 86\\n2 0 31\\n3 0 61\\n0\\n",
              "timestamp": 1681028275390
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275419
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
        "bot1": {
          "received": [
            {
              "message": "78\\n0 0 63\\n1 1 87\\n2 0 32\\n3 0 62\\n0\\n",
              "timestamp": 1681028275419
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275449
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "78\\n0 0 63\\n1 1 87\\n2 0 32\\n3 0 62\\n0\\n",
              "timestamp": 1681028275449
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275480
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
        "bot1": {
          "received": [
            {
              "message": "79\\n0 0 64\\n1 1 88\\n2 0 32\\n3 0 63\\n0\\n",
              "timestamp": 1681028275480
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275510
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "79\\n0 0 64\\n1 1 88\\n2 0 32\\n3 0 63\\n0\\n",
              "timestamp": 1681028275511
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275540
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
        "bot1": {
          "received": [
            {
              "message": "80\\n0 0 65\\n1 1 89\\n2 0 32\\n3 0 64\\n0\\n",
              "timestamp": 1681028275540
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275571
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "80\\n0 0 65\\n1 1 89\\n2 0 32\\n3 0 64\\n0\\n",
              "timestamp": 1681028275571
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681028275601
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
        "bot1": {
          "received": [
            {
              "message": "81\\n0 0 66\\n1 1 90\\n2 0 33\\n3 0 65\\n0\\n",
              "timestamp": 1681028275602
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275632
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "81\\n0 0 66\\n1 1 90\\n2 0 33\\n3 0 65\\n0\\n",
              "timestamp": 1681028275632
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275662
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
        "bot1": {
          "received": [
            {
              "message": "82\\n0 0 67\\n1 1 91\\n2 0 33\\n3 0 66\\n0\\n",
              "timestamp": 1681028275664
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275694
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "82\\n0 0 67\\n1 1 91\\n2 0 33\\n3 0 66\\n0\\n",
              "timestamp": 1681028275694
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275725
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
        "bot1": {
          "received": [
            {
              "message": "83\\n0 0 68\\n1 1 92\\n2 0 33\\n3 0 67\\n0\\n",
              "timestamp": 1681028275725
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275755
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "83\\n0 0 68\\n1 1 92\\n2 0 33\\n3 0 67\\n0\\n",
              "timestamp": 1681028275755
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275786
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
        "bot1": {
          "received": [
            {
              "message": "84\\n0 0 69\\n1 1 93\\n2 0 34\\n3 0 68\\n0\\n",
              "timestamp": 1681028275786
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275817
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "84\\n0 0 69\\n1 1 93\\n2 0 34\\n3 0 68\\n0\\n",
              "timestamp": 1681028275817
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275847
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
        "bot1": {
          "received": [
            {
              "message": "85\\n0 0 70\\n1 1 94\\n2 0 34\\n3 0 69\\n0\\n",
              "timestamp": 1681028275848
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275878
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "85\\n0 0 70\\n1 1 94\\n2 0 34\\n3 0 69\\n0\\n",
              "timestamp": 1681028275878
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275908
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
        "bot1": {
          "received": [
            {
              "message": "86\\n0 0 71\\n1 1 95\\n2 0 34\\n3 0 70\\n0\\n",
              "timestamp": 1681028275909
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275939
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "86\\n0 0 71\\n1 1 95\\n2 0 34\\n3 0 70\\n0\\n",
              "timestamp": 1681028275939
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028275970
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
        "bot1": {
          "received": [
            {
              "message": "87\\n0 0 72\\n1 1 96\\n2 0 35\\n3 0 71\\n0\\n",
              "timestamp": 1681028275970
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276000
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "87\\n0 0 72\\n1 1 96\\n2 0 35\\n3 0 71\\n0\\n",
              "timestamp": 1681028276000
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276031
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
        "bot1": {
          "received": [
            {
              "message": "88\\n0 0 73\\n1 1 97\\n2 0 35\\n3 0 72\\n0\\n",
              "timestamp": 1681028276031
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276062
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "88\\n0 0 73\\n1 1 97\\n2 0 35\\n3 0 72\\n0\\n",
              "timestamp": 1681028276062
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276092
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
        "bot1": {
          "received": [
            {
              "message": "89\\n0 0 74\\n1 1 98\\n2 0 35\\n3 0 73\\n0\\n",
              "timestamp": 1681028276093
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276123
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "89\\n0 0 74\\n1 1 98\\n2 0 35\\n3 0 73\\n0\\n",
              "timestamp": 1681028276123
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276154
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
        "bot1": {
          "received": [
            {
              "message": "90\\n0 0 75\\n1 1 99\\n2 0 36\\n3 0 74\\n0\\n",
              "timestamp": 1681028276154
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276184
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "90\\n0 0 75\\n1 1 99\\n2 0 36\\n3 0 74\\n0\\n",
              "timestamp": 1681028276185
            }
          ],
          "sent": [
            {
              "message": "1",
              "timestamp": 1681028276214
            },
            {
              "message": "-1 1 1",
              "timestamp": 1681028276214
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
        "bot1": {
          "received": [
            {
              "message": "91\\n0 0 76\\n1 1 100\\n2 0 36\\n3 0 75\\n0\\n",
              "timestamp": 1681028276215
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276244
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "91\\n0 0 76\\n1 1 100\\n2 0 36\\n3 0 75\\n0\\n",
              "timestamp": 1681028276244
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276274
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
        "bot1": {
          "received": [
            {
              "message": "92\\n0 0 77\\n1 1 101\\n2 0 36\\n3 0 76\\n0\\n",
              "timestamp": 1681028276275
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276305
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "92\\n0 0 77\\n1 1 101\\n2 0 36\\n3 0 76\\n0\\n",
              "timestamp": 1681028276305
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276336
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
        "bot1": {
          "received": [
            {
              "message": "93\\n0 0 78\\n1 1 102\\n2 0 37\\n3 0 77\\n0\\n",
              "timestamp": 1681028276336
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276367
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "93\\n0 0 78\\n1 1 102\\n2 0 37\\n3 0 77\\n0\\n",
              "timestamp": 1681028276367
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276397
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
        "bot1": {
          "received": [
            {
              "message": "94\\n0 0 79\\n1 1 103\\n2 0 37\\n3 0 78\\n0\\n",
              "timestamp": 1681028276398
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276427
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "94\\n0 0 79\\n1 1 103\\n2 0 37\\n3 0 78\\n0\\n",
              "timestamp": 1681028276427
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276458
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
        "bot1": {
          "received": [
            {
              "message": "95\\n0 0 80\\n1 1 104\\n2 0 37\\n3 0 79\\n0\\n",
              "timestamp": 1681028276458
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276489
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "95\\n0 0 80\\n1 1 104\\n2 0 37\\n3 0 79\\n0\\n",
              "timestamp": 1681028276489
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276519
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
        "bot1": {
          "received": [
            {
              "message": "96\\n0 0 81\\n1 1 105\\n2 0 38\\n3 0 80\\n0\\n",
              "timestamp": 1681028276520
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276549
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "96\\n0 0 81\\n1 1 105\\n2 0 38\\n3 0 80\\n0\\n",
              "timestamp": 1681028276549
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276580
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
        "bot1": {
          "received": [
            {
              "message": "97\\n0 0 82\\n1 1 106\\n2 0 38\\n3 0 81\\n0\\n",
              "timestamp": 1681028276580
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276611
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "97\\n0 0 82\\n1 1 106\\n2 0 38\\n3 0 81\\n0\\n",
              "timestamp": 1681028276611
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276641
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
        "bot1": {
          "received": [
            {
              "message": "98\\n0 0 83\\n1 1 107\\n2 0 38\\n3 0 82\\n0\\n",
              "timestamp": 1681028276642
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276671
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "98\\n0 0 83\\n1 1 107\\n2 0 38\\n3 0 82\\n0\\n",
              "timestamp": 1681028276671
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276702
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
        "bot1": {
          "received": [
            {
              "message": "99\\n0 0 84\\n1 1 108\\n2 0 39\\n3 0 83\\n0\\n",
              "timestamp": 1681028276702
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276732
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "99\\n0 0 84\\n1 1 108\\n2 0 39\\n3 0 83\\n0\\n",
              "timestamp": 1681028276733
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276763
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
        "bot1": {
          "received": [
            {
              "message": "100\\n0 0 85\\n1 1 109\\n2 0 39\\n3 0 84\\n0\\n",
              "timestamp": 1681028276764
            }
          ],
          "sent": [
            {
              "message": "0",
              "timestamp": 1681028276794
            }
          ]
        },
        "bot2": {
          "received": [
            {
              "message": "100\\n0 0 85\\n1 1 109\\n2 0 39\\n3 0 84\\n0\\n",
              "timestamp": 1681028276794
            }
          ],
          "sent": [
            {
              "message": "-1",
              "timestamp": 1681028276825
            }
          ],
          "commandError": "Expected the number of commands, but received: -1"
        }
      }
    }
  ]
}
`;
