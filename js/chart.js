	//ປະກາດຊື່ແຂວງ, ປີ ແລະ ຂໍ້ມູນ... ໃສ່ "" ຍ້ອນເປັນຕົວໜັງສື
	var year = [2015,2016,2017,2018,2019,2020];
	var gdp = [5.5,6.9,3.4,8,12,9];
	var ifr = [10,8,12,9,13,7.9];
	var province = ["VTE","PSL","SLV","LPB"];
	var pop = [820000,580000,620000,720000];
	var province2 = ["VTE","PSL","LNT","BOR","ODX","XBL","LPB","XIK","HOP","VTP","BKX","KHM","SVK","SLV","SEK","CPS","ATP","XSB"];
	var b2019 = [4,5,7,3,9,7,9,6,7,10,8,4,15,4,3,12,5,3];
	var b2020 = [6,3,9,5,11,4,5,8,10,12,7,6,12,7,4,10,8,5];



	//start chart1
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx,{
		type: "line", //chart type
		data:{
			//datasets and option
			labels: year,
			datasets: [{
				label:"GDP growth rate",
				data: gdp,
				borderColor:"#8F3A84",
				fill:false,
				lineTension:0,

			}]

		},
		//ເລີ່ມການຫຍໍ້ຊັດສ່ວນ
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:6
					}
				}]
			},
			//ບໍໂຊຫົວຂໍ້
			legend:{
				display:false,
			}
		} //ສີ້ນສຸດການຫຍໍ້ຊັດສ່ວນ


	});//end of my chart1
		//start chart2
	var ctx = document.getElementById("barchart");
	var barchart = new Chart(ctx,{
		type: "bar",//chart type bar
		plugins: [ChartDataLabels],//ລົງຖະບຽນການສະແດງຂໍ້ມູນຢູ່ເສັ້ນສະແດງ
		data:{
			//datasets option
			labels: year,
			datasets: [{
				label:"Inflation rate",
				data: ifr,
				backgroundColor:["#EAFAF1","#D5F5E3","#ABEBC6","#82E0AA","#58D68D","#2ECC71"],

			}]
		},
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:6
					}
				}]
			},
			//ບໍໂຊຫົວຂໍ້
			legend:{
				display:false,
			}
		}

	});//end of my chart2
	//start chart3
	var ctx = document.getElementById("piechart");
	var piechart = new Chart(ctx,{
		type: "pie",//chart type pie
		data:{
			//data option
			labels: year,
			datasets: [{
				label:"Inflation rate",
				data: ifr,
				backgroundColor:["#C0392B","#CD6155","#D98880","#E6B0AA","#F2D7D5","#FDEDEC"],
			}]
		},
		//ຍ້າຍ legend ຂອງ pie ລົງໄປຢູ່ລຸ່ມ
		options:{
			legend:{
				position:"right"
			}
		}
	});//end of my chart3
	var ctx = document.getElementById("pChart");
	var pChart = new Chart(ctx,{
		type: "horizontalBar",//chart type horizontalBar
		data:{
			labels: province,
			datasets: [{
				label: "population",
				data: pop,
				backgroundColor:["#3498DB","#5DADE2","#85C1E9","#AED6F1"],
			}]
		},
		options:{
			scales:{
				xAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:6
					}
				}]
			},
			//ບໍໂຊຫົວຂໍ້
			legend:{
				display:false,
			}
		}
	});

	//console.log(year,gdp);
	console.log(province,pop);
	//ສ້າງ 2 ຂໍ້ມູນໃນເສັ້ນສະແດງດຽວ 2 years in 1 chart
	var ctx = document.getElementById("bChart");
	var bChart = new Chart(ctx,{
		type: "bar",
		data:{
			labels:province2,
			datasets: [{
				label: "Birth rate 2019",
				data: b2019,
				backgroundColor: "#2471A3",
			},
			{
				label: "Birth rate 2020",
				data: b2020,
				backgroundColor: "#AED6F1"
			}]
		},
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
					}
				}]
			},
			//ປ່ຽນສິ, ຂະໜາດຂອງໂຕໜັງສືຂອງ Legend ແລະ ຍ້າຍທີ່ຕັ້ງຂອງ legend
			legend:{
				labels:{
					fontColor:"#78281F",
					fontSize:18,
					fontstyle:"bold"
				},
				position:"bottom",
			}
		}

	})