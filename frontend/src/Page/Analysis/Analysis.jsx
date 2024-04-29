import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { Grid } from '@mui/material';
import moment from 'moment';


export default function Analysis() {
    // Define skills and their corresponding skill levels
    var skills = [
        "Programming Languages",
        "Software Development",
        "Algorithm Design and Analysis",
        "Computer Architecture",
        "Operating Systems",
        "Networking",
        "Database Management",
        "Cybersecurity",
        "Machine Learning and AI",
        "Embedded Systems",
        "Web Development",
        "Cloud Computing",
        "Version Control Systems",
        "Problem-Solving Skills",
        "Communication and Collaboration"
    ];

    // Function to generate random skill levels
    function generateSkillLevels() {
        var skillLevels = [];
        for (var i = 0; i < skills.length; i++) {
            skillLevels.push({
                skill: skills[i],
                level: Math.floor(Math.random() * 101)
            });
        }
        return skillLevels;
    }

    // Generate random skill levels
    var skillData = generateSkillLevels();

    // Prepare data for treemap
    var options = {
        series: [
            {
                data: skillData.map(function (skill) {
                    return { x: skill.skill, y: skill.level };
                })
            }
        ],
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: "treemap"
        },
        title: {
            text: "Skill Levels Treemap",
            align: "center"
        },
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        }
    };

    var options2 = {
        series: [
            {
                name: 'Student',
                data: [
                    {
                        x: 'Design UI Mockups',
                        y: [
                            new Date('2024-04-01').getTime(),
                            new Date('2024-04-03').getTime()
                        ]
                    },
                    {
                        x: 'Design Database Schema',
                        y: [
                            new Date('2024-04-04').getTime(),
                            new Date('2024-04-06').getTime()
                        ]
                    },
                    {
                        x: 'Frontend Development',
                        y: [
                            new Date('2024-04-07').getTime(),
                            new Date('2024-04-13').getTime()
                        ]
                    },
                    {
                        x: 'Backend Development',
                        y: [
                            new Date('2024-04-14').getTime(),
                            new Date('2024-04-20').getTime()
                        ]
                    },
                    {
                        x: 'Integration & Testing',
                        y: [
                            new Date('2024-04-21').getTime(),
                            new Date('2024-04-30').getTime()
                        ]
                    }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeBar',
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true,
                    customIcons: []
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                var startDate = moment(val[0]);
                var endDate = moment(val[1]);
                var duration = moment.duration(endDate.diff(startDate));
                var days = duration.asDays();
                return Math.floor(days) + ' days';
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                formatter: function (val) {
                    return moment(val).format('MMM DD');
                }
            }
        },
        yaxis: {
            title: {
                text: 'Tasks'
            },
            labels: {
                show: true
            }
        },
        legend: {
            show: true,
            position: 'top'
        },
        tooltip: {
            enabled: true,
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                var startDate = moment(w.globals.seriesX[seriesIndex][dataPointIndex]);
                var endDate = moment(w.globals.seriesXEnd[seriesIndex][dataPointIndex]);
                var duration = moment.duration(endDate.diff(startDate));
                var days = duration.asDays();
                return '<div class="apexcharts-tooltip-rangebar">' +
                    '<div>Start: ' + startDate.format('MMM DD, YYYY') + '</div>' +
                    '<div>End: ' + endDate.format('MMM DD, YYYY') + '</div>' +
                    '<div>Duration: ' + Math.floor(days) + ' days</div>' +
                    '</div>';
            }
        },
        title: {
            text: 'CampusLink Project Timeline',
            align: 'center',
            style: {
                fontSize: '20px'
            }
        }
    };


    function generateRandomData() {
        const data = [];
        for (let i = 0; i < 5; i++) {
            data.push({
                x: new Date(`2024-0${i + 1}-01`).getTime(),
                y: Math.floor(Math.random() * 101) // Random progress percentage from 0 to 100
            });
        }
        return data;
    }

    // Define random subjects
    const subjects = ['Magic Potions', 'Flying Broomsticks', 'Potion Brewing', 'Spellcasting'];

    // Generate random progress data for each subject
    const seriesData = subjects.map(subject => ({
        name: subject,
        data: generateRandomData()
    }));

    // Define chart options
    const options3 = {
        series: seriesData,
        chart: {
            height: 350,
            type: 'line'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01']
        },
        title: {
            text: 'Wizardry Student Progress Over Time',
            align: 'left'
        },
        legend: {
            position: 'top'
        }
    };

    var options4 = {
        series: [30, 20, 15, 10, 25], // Example percentages of time spent
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Studying', 'Sleeping', 'Socializing', 'Working', 'Others'], // Example activity labels
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };


    useEffect(() => {

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();


        var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
        chart2.render();


        var chart3 = new ApexCharts(document.querySelector("#chart3"), options3); 
        chart3.render();

        var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
        chart4.render();
        
        return () => {
            chart.destroy();
            chart2.destroy();
            chart3.destroy();
            chart4.destroy();
        };
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div id="chart" style={{ border: '1px solid #ccc', padding: '10px' }}></div>
            </Grid>
            <Grid item xs={8}>
                <div id="chart2" style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}></div>
            </Grid>
            <Grid item xs={4}>
                <div id="chart4" style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}></div>
            </Grid>
            <Grid item xs={8}>
                <div id="chart3" style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}></div>
            </Grid>

        </Grid>
    );
}
