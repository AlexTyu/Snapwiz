var jsonData =
{
	"timeline":
	{
		"headline":"Snapwiz: Personalized Learning Powered by Science",
		"type":"default",
		"text":"<p>This is the story of Snapwiz</p>",
		"asset": {
			"media":"https://www.flickr.com/photos/venkatarameshkommoju/8421076936/in/photolist-dQ9dME-4qmp2U-4UaQAV-82Yji1-4gqRir-7i92zp-4HxD1m-ocMMDb-34UHNG-dVSWVo-81QWzm-2eZWc-5U8hbs-oRe5nS-q1AgRt-BhoFK-z1EfHT-879YUW-dYhyxK-9j517N-pFvJgt-9YSU5-6bUbcK-2DW2N-6yDSbH-onC8qu-batP18-aoNC15-prLZQR-nBRiqz-dGthR5-bquTfb-wCv1DQ-oUTd2o-8Met9-8jGj4J-9ZkUBk-oRghPN-8UwdR-tm9f6-Gjib1-5cw2Uz-aciwHR-ogax3J-qQ3jWY-9c8U7b-bXb8Y5-qCg9L6-7dwwaD-rM2c1F",
		},
    "date": [
      {
				"startDate":"2011,12,10",
				"headline":"Headline Goes Hefghgfre",
				"text":"<p>Body text goes here, some HTML is OK</p>",
				"tag":"This is Optional",
				"asset": {
					"media":"http://placehosd.it/200/300",
					"thumbnail":"http://placehold.it/32/32",
					"credit":"Credit Name Goes Here",
					"caption":"Caption text goes here"
				}
			},

      {
				"startDate":"2011,12,24",
				"endDate":"2011,12,25",
				"headline":"2nd Headline Goes Here",
				"text":"<p>Body 2nd text goes here, some HTML is OK</p>",
				"tag":"This is Optional",
				"asset": {
					"media":"http://placekitten.com/200/300",
					"thumbnail":"http://placekitten.com/32/32",
					"credit":"Credit Name Goes Here",
					"caption":"Caption text goes here"
				}
			}

		],
		"era": [
			{
				"startDate":"2011,12,10",
				"endDate":"2011,12,25",
				"headline":"Headline Goes Here",
				"tag":"This is Optional"
			}

		]

	}
};
var options = {
        type:       'timeline',
        //width:      '750',
        height:     '800',
        source:     jsonData,
        embed_id:   'my-timeline'           // ID of the DIV you want to load the timeline into
    };
createStoryJS(options);
