<template>
    <!-- COMPONENT:MainPanel -->
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <div class="home-tab">
                        <div class="tab-content tab-content-basic">
                            <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                                <div class="row current-weather">
                                    <div class="col-sm-12">
                                        <DailyWeatherChart></DailyWeatherChart>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8 d-flex flex-column">
                                        <div class="row flex-grow">
                                            <div class="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                                                <PerformanceLineChart></PerformanceLineChart>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 d-flex flex-column">
                                        <div class="row flex-grow">
                                            <div class="col-md-6 col-lg-12 grid-margin stretch-card">
                                                <StatsChart></StatsChart>
                                            </div>
                                            <div class="col-md-6 col-lg-12 grid-margin stretch-card">
                                                <div class="card card-rounded">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div class="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                                                    <div class="circle-progress-width">
                                                                        <div id="totalVisitors" class="progressbar-js-circle pr-2"></div>
                                                                    </div>
                                                                    <div>
                                                                        <p class="text-small mb-2">Total Visitors</p>
                                                                        <h4 class="mb-0 fw-bold">26.80%</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="circle-progress-width">
                                                                        <div id="visitperday" class="progressbar-js-circle pr-2"></div>
                                                                    </div>
                                                                    <div>
                                                                        <p class="text-small mb-2">Visits per day</p>
                                                                        <h4 class="mb-0 fw-bold">9065</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8 d-flex flex-column">
                                        <div class="row flex-grow">
                                            <div class="col-12 grid-margin stretch-card">
                                                <SunriseSunsetChart></SunriseSunsetChart>
                                            </div>
                                        </div>
                                        <div class="row flex-grow">
                                            <div class="col-12 grid-margin stretch-card">
                                                <div class="card card-rounded table-darkBGImg">
                                                    <div class="card-body">
                                                        <div class="col-sm-8">
                                                            <h3 class="text-white upgrade-info mb-0">
                                                                Enhance your
                                                                <span class="fw-bold">Campaign</span>
                                                                for better outreach
                                                            </h3>
                                                            <a href="#" class="btn btn-info upgrade-btn">Upgrade Account!</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row flex-grow">
                                            <div class="col-12 grid-margin stretch-card">
                                                <div class="card card-rounded">
                                                    <div class="card-body">
                                                        <div class="d-sm-flex justify-content-between align-items-start">
                                                            <div>
                                                                <h4 class="card-title card-title-dash">Pending Requests</h4>
                                                                <p class="card-subtitle card-subtitle-dash">You have 50+ new requests</p>
                                                            </div>
                                                            <div>
                                                                <button class="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i class="mdi mdi-account-plus"></i>Add new member</button>
                                                            </div>
                                                        </div>
                                                        <div class="table-responsive mt-1">
                                                            <table class="table select-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            <div class="form-check form-check-flat mt-0">
                                                                                <label class="form-check-label"> <input type="checkbox" class="form-check-input" aria-checked="false" /><i class="input-helper"></i></label>
                                                                            </div>
                                                                        </th>
                                                                        <th>Customer</th>
                                                                        <th>Company</th>
                                                                        <th>Progress</th>
                                                                        <th>Status</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div class="form-check form-check-flat mt-0">
                                                                                <label class="form-check-label"> <input type="checkbox" class="form-check-input" aria-checked="false" /><i class="input-helper"></i></label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <img src="images/faces/face1.jpg" alt="" />
                                                                                <div>
                                                                                    <h6>Brandon Washington</h6>
                                                                                    <p>Head admin</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <h6>Company name 1</h6>
                                                                            <p>company type</p>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                                    <p class="text-success">79%</p>
                                                                                    <p>85/162</p>
                                                                                </div>
                                                                                <div class="progress progress-md">
                                                                                    <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="badge badge-opacity-warning">In progress</div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div class="form-check form-check-flat mt-0">
                                                                                <label class="form-check-label"> <input type="checkbox" class="form-check-input" aria-checked="false" /><i class="input-helper"></i></label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <img src="images/faces/face2.jpg" alt="" />
                                                                                <div>
                                                                                    <h6>Laura Brooks</h6>
                                                                                    <p>Head admin</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <h6>Company name 1</h6>
                                                                            <p>company type</p>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                                    <p class="text-success">65%</p>
                                                                                    <p>85/162</p>
                                                                                </div>
                                                                                <div class="progress progress-md">
                                                                                    <div class="progress-bar bg-success" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="badge badge-opacity-warning">In progress</div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div class="form-check form-check-flat mt-0">
                                                                                <label class="form-check-label"> <input type="checkbox" class="form-check-input" aria-checked="false" /><i class="input-helper"></i></label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <img src="images/faces/face3.jpg" alt="" />
                                                                                <div>
                                                                                    <h6>Wayne Murphy</h6>
                                                                                    <p>Head admin</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <h6>Company name 1</h6>
                                                                            <p>company type</p>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                                    <p class="text-success">65%</p>
                                                                                    <p>85/162</p>
                                                                                </div>
                                                                                <div class="progress progress-md">
                                                                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 38%" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="badge badge-opacity-warning">In progress</div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div class="form-check form-check-flat mt-0">
                                                                                <label class="form-check-label"> <input type="checkbox" class="form-check-input" aria-checked="false" /><i class="input-helper"></i></label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <img src="images/faces/face4.jpg" alt="" />
                                                                                <div>
                                                                                    <h6>Matthew Bailey</h6>
                                                                                    <p>Head admin</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <h6>Company name 1</h6>
                                                                            <p>company type</p>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                                    <p class="text-success">65%</p>
                                                                                    <p>85/162</p>
                                                                                </div>
                                                                                <div class="progress progress-md">
                                                                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="badge badge-opacity-danger">Pending</div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div class="form-check form-check-flat mt-0">
                                                                                <label class="form-check-label"> <input type="checkbox" class="form-check-input" aria-checked="false" /><i class="input-helper"></i></label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <img src="images/faces/face5.jpg" alt="" />
                                                                                <div>
                                                                                    <h6>Katherine Butler</h6>
                                                                                    <p>Head admin</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <h6>Company name 1</h6>
                                                                            <p>company type</p>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                                    <p class="text-success">65%</p>
                                                                                    <p>85/162</p>
                                                                                </div>
                                                                                <div class="progress progress-md">
                                                                                    <div class="progress-bar bg-success" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="badge badge-opacity-success">Completed</div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row flex-grow">
                                            <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                                                <div class="card card-rounded">
                                                    <div class="card-body card-rounded">
                                                        <h4 class="card-title card-title-dash">Recent Events</h4>
                                                        <div class="list align-items-center border-bottom py-2">
                                                            <div class="wrapper w-100">
                                                                <p class="mb-2 font-weight-medium">Change in Directors</p>
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="d-flex align-items-center">
                                                                        <i class="mdi mdi-calendar text-muted me-1"></i>
                                                                        <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="list align-items-center border-bottom py-2">
                                                            <div class="wrapper w-100">
                                                                <p class="mb-2 font-weight-medium">Other Events</p>
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="d-flex align-items-center">
                                                                        <i class="mdi mdi-calendar text-muted me-1"></i>
                                                                        <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="list align-items-center border-bottom py-2">
                                                            <div class="wrapper w-100">
                                                                <p class="mb-2 font-weight-medium">Quarterly Report</p>
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="d-flex align-items-center">
                                                                        <i class="mdi mdi-calendar text-muted me-1"></i>
                                                                        <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="list align-items-center border-bottom py-2">
                                                            <div class="wrapper w-100">
                                                                <p class="mb-2 font-weight-medium">Change in Directors</p>
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="d-flex align-items-center">
                                                                        <i class="mdi mdi-calendar text-muted me-1"></i>
                                                                        <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="list align-items-center pt-3">
                                                            <div class="wrapper w-100">
                                                                <p class="mb-0">
                                                                    <a href="#" class="fw-bold text-primary">Show all <i class="mdi mdi-arrow-right ms-2"></i></a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                                                <div class="card card-rounded">
                                                    <div class="card-body">
                                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                                            <h4 class="card-title card-title-dash">Activities</h4>
                                                            <p class="mb-0">20 finished, 5 remaining</p>
                                                        </div>
                                                        <ul class="bullet-line-list">
                                                            <li>
                                                                <div class="d-flex justify-content-between">
                                                                    <div>
                                                                        <span class="text-light-green">Ben Tossell</span>
                                                                        assign you a task
                                                                    </div>
                                                                    <p>Just now</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex justify-content-between">
                                                                    <div>
                                                                        <span class="text-light-green">Oliver Noah</span>
                                                                        assign you a task
                                                                    </div>
                                                                    <p>1h</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex justify-content-between">
                                                                    <div>
                                                                        <span class="text-light-green">Jack William</span>
                                                                        assign you a task
                                                                    </div>
                                                                    <p>1h</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex justify-content-between">
                                                                    <div>
                                                                        <span class="text-light-green">Leo Lucas</span>
                                                                        assign you a task
                                                                    </div>
                                                                    <p>1h</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex justify-content-between">
                                                                    <div>
                                                                        <span class="text-light-green">Thomas Henry</span>
                                                                        assign you a task
                                                                    </div>
                                                                    <p>1h</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex justify-content-between">
                                                                    <div>
                                                                        <span class="text-light-green">Ben Tossell</span>
                                                                        assign you a task
                                                                    </div>
                                                                    <p>1h</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex justify-content-between">
                                                                    <div>
                                                                        <span class="text-light-green">Ben Tossell</span>
                                                                        assign you a task
                                                                    </div>
                                                                    <p>1h</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div class="list align-items-center pt-3">
                                                            <div class="wrapper w-100">
                                                                <p class="mb-0">
                                                                    <a href="#" class="fw-bold text-primary">Show all <i class="mdi mdi-arrow-right ms-2"></i></a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 d-flex flex-column">
                                        <div class="row flex-grow">
                                            <div class="col-12 grid-margin stretch-card">
                                                <ToDoList></ToDoList>
                                            </div>
                                        </div>
                                        <div class="row flex-grow">
                                            <div class="col-12 grid-margin stretch-card">
                                                <div class="card card-rounded">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                                    <h4 class="card-title card-title-dash">Type By Amount</h4>
                                                                </div>
                                                                <canvas class="my-auto" id="doughnutChart" height="200"></canvas>
                                                                <div id="doughnut-chart-legend" class="mt-5 text-center"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row flex-grow">
                                            <div class="col-12 grid-margin stretch-card">
                                                <div class="card card-rounded">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                                    <div>
                                                                        <h4 class="card-title card-title-dash">Leave Report</h4>
                                                                    </div>
                                                                    <div>
                                                                        <div class="dropdown">
                                                                            <button
                                                                                class="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0"
                                                                                type="button"
                                                                                id="dropdownMenuButton3"
                                                                                data-bs-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false"
                                                                            >
                                                                                Month Wise
                                                                            </button>
                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                                                                <h6 class="dropdown-header">week Wise</h6>
                                                                                <a class="dropdown-item" href="#">Year Wise</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <canvas id="leaveReport"></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row flex-grow">
                                            <div class="col-12 grid-margin stretch-card">
                                                <div class="card card-rounded">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                                    <div>
                                                                        <h4 class="card-title card-title-dash">Top Performer</h4>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                                                        <div class="d-flex">
                                                                            <img class="img-sm rounded-10" src="images/faces/face1.jpg" alt="profile" />
                                                                            <div class="wrapper ms-3">
                                                                                <p class="ms-1 mb-1 fw-bold">Brandon Washington</p>
                                                                                <small class="text-muted mb-0">162543</small>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-muted text-small">1h ago</div>
                                                                    </div>
                                                                    <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                                                        <div class="d-flex">
                                                                            <img class="img-sm rounded-10" src="images/faces/face2.jpg" alt="profile" />
                                                                            <div class="wrapper ms-3">
                                                                                <p class="ms-1 mb-1 fw-bold">Wayne Murphy</p>
                                                                                <small class="text-muted mb-0">162543</small>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-muted text-small">1h ago</div>
                                                                    </div>
                                                                    <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                                                        <div class="d-flex">
                                                                            <img class="img-sm rounded-10" src="images/faces/face3.jpg" alt="profile" />
                                                                            <div class="wrapper ms-3">
                                                                                <p class="ms-1 mb-1 fw-bold">Katherine Butler</p>
                                                                                <small class="text-muted mb-0">162543</small>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-muted text-small">1h ago</div>
                                                                    </div>
                                                                    <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                                                        <div class="d-flex">
                                                                            <img class="img-sm rounded-10" src="images/faces/face4.jpg" alt="profile" />
                                                                            <div class="wrapper ms-3">
                                                                                <p class="ms-1 mb-1 fw-bold">Matthew Bailey</p>
                                                                                <small class="text-muted mb-0">162543</small>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-muted text-small">1h ago</div>
                                                                    </div>
                                                                    <div class="wrapper d-flex align-items-center justify-content-between pt-2">
                                                                        <div class="d-flex">
                                                                            <img class="img-sm rounded-10" src="images/faces/face5.jpg" alt="profile" />
                                                                            <div class="wrapper ms-3">
                                                                                <p class="ms-1 mb-1 fw-bold">Rafell John</p>
                                                                                <small class="text-muted mb-0">Alaska, USA</small>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-muted text-small">1h ago</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
                <span class="text-muted text-center text-sm-left d-block d-sm-inline-block"
                    >Premium
                    <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a>
                    from BootstrapDash.</span
                >
                <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
            </div>
        </footer>
        <!-- partial -->
    </div>
</template>

<script>
import PerformanceLineChart from "./charts/PerformanceLineChart";
import DailyWeatherChart from "./charts/DailyWeatherChart";
import StatsChart from "./charts/StatsChart";
import ToDoList from "./todo_components/ToDoList";
import SunriseSunsetChart from './charts/SunriseSunsetChart';

export default {
    name: "MainPanel",
    data() {
        return {};
    },
    props: {},
    components: {
        PerformanceLineChart,
        ToDoList,
        DailyWeatherChart,
        StatsChart,
        SunriseSunsetChart
    },
    mounted() {},
    methods: {}
};
</script>

<style scoped lang="scss">
.main-panel {
    width: 100%;
    min-height: calc(100vh - 97px);
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
}

</style>
