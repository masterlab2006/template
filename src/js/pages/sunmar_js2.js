"use strict";
var $stage = "coral", $gdsUrl = "https://booking.coral.ru", $urlAppendix = "",
    $ascr = "c6cdb0f4ddb8840e8eceeda17cd77073";
(function () {
    function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (h = "function" == typeof require && require, !o && h) return h(f, !0);
                    if (e) return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                s = i[f] = { exports: {} };
                t[f][0].call(s.exports, function (n) {
                    var i = t[f][1][n];
                    return u(i || n)
                }, s, s.exports, n, t, i, r)
            }
            return i[f].exports
        }

        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++) u(r[f]);
        return u
    }

    return n
})()({
    1: [function () {
        var n = function () {
            var t = "searchtabsmain", n = void 0, i = function () {
                var n = function (n) {
                    i(n)
                }, i = function (n) {
                    $(n).on("click", ".btnShowMore", function () {
                        $("[data-module=searchtabsmain]").data("ishomepage") || $(n).removeAttr("data-ishomepage");
                        $(".showMoreTab").hide();
                        $(".container-tabItemWrap .activeTab").slideDown();
                        $(".search-summary", n).hide()
                    });
                    $(n).on("click", ".btnShowLess", function () {
                        var t = $(this);
                        $("[data-module=searchtabsmain]").data("ishomepage") || $(n).removeAttr("data-ishomepage");
                        t.closest(".container-tabItem").slideUp();
                        $(".showMoreTab").show()
                    })
                };
                return {
                    init: function () {
                        moduleFactory.registerModule(t, n)
                    }
                }
            };
            return {
                getInstance: function () {
                    return n || (n = i()), n
                }
            }
        }(), t = n.getInstance();
        t.init()
    }, {}]
}, {}, [1]);
"use strict";
var $stage = "coral", $gdsUrl = "https://booking.coral.ru", $urlAppendix = "",
    $ascr = "c6cdb0f4ddb8840e8eceeda17cd77073";
(function () {
    function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (h = "function" == typeof require && require, !o && h) return h(f, !0);
                    if (e) return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                s = i[f] = { exports: {} };
                t[f][0].call(s.exports, function (n) {
                    var i = t[f][1][n];
                    return u(i || n)
                }, s, s.exports, n, t, i, r)
            }
            return i[f].exports
        }

        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++) u(r[f]);
        return u
    }

    return n
})()({
    1: [function () {
        (function (n) {
            (function () {
                var t = function () {
                    var i = "packagesearchPartial", t = void 0, r = function () {
                        var r = null, o = function (n) {
                            r = n;
                            h();
                            c();
                            s()
                        }, s = function () {
                            t.destination();
                            t.departure();
                            t.departureDateTimePicker();
                            t.passenger(r);
                            t.checkSearch(r);
                            t.nights(r);
                            var n = $(r);
                            $(".btnSendContainer > .btnSubmitPackageSearch", n).on("click", function () {
                                t.sendform(r)
                            })
                        }, h = function () {
                            var n = $(".topItem.geolocation"), i = $(".geolocation-current", n),
                                r = $(".geolocation-list .geolocation-item", n);
                            r.on("click", function () {
                                var n = $(this), r, u, f;
                                i.text(n.text());
                                localStorage.removeItem("sess_ps");
                                i.attr("departureid", n.data("departureid"));
                                r = $(".packageSearch__departureInput", ".packagetour");
                                r.val(n.text());
                                r.attr("itemname", n.text());
                                r.attr("itemid", n.data("departureid"));
                                u = $(this).data("departureid");
                                $.ajax({
                                    type: "post", url: "/v1/departure/" + u, success: function (n) {
                                        window.location.href = n
                                    }
                                });
                                f = [{ Id: parseInt(n.data("departureid")), Label: n.text() }];
                                t.packageSearchModel(f, "departure");
                                t.createNights()
                            })
                        }, c = function () {
                            var i = $(".commonModal"), f = "modalActiveFlightList", r, u;
                            $(document).off("click", ".destinationContainer .addonButton").on("click", ".destinationContainer .addonButton", function () {
                                n.modalloader.add(i);
                                n.commonmodal.show({ url: "/v1/customer/modal/activeflightlist" }, {
                                    targetModal:      "commonModal",
                                    additionalClass:  f,
                                    modalDialogClass: "activeFlightListModalDialog"
                                }, function () {
                                    n.modalloader.remove();
                                    var r = $(".packageSearch__departureListItem", ".packageSearch__departureList");
                                    _.forEach(r, function (n) {
                                        var r = $(n).data("itemid"), t = $(n).data("itemname");
                                        $(".activeFlightList__departureList", i).append('<li class="activeFlightList__departureListItem" data-itemid="' + r + '" data-itemname="' + t + '" countryid=""> ' + t + "<\/li>")
                                    });
                                    $(document).off("click", ".commonModal .btnCancelModal").on("click", ".commonModal .btnCancelModal", function () {
                                        i.modal("hide")
                                    });
                                    $(document).off("click", ".commonModal .btnApplyModal").on("click", ".commonModal .btnApplyModal", function () {
                                        var h, n;
                                        if ($(".selected", i).length > 0) {
                                            var c = $(".selected", i), r = void 0, l = void 0, f = void 0;
                                            localStorage.removeItem("sess_ps");
                                            var e = $(".packagetour"), a = $(".packageSearch__NightsInput", e),
                                                s = $(".departureContainer .packageSearch__departureInput", e),
                                                u = $(".destinationContainer .packageSearch__destinationInput", e),
                                                o = $(".departureDateTimePickerContainer .packageSearch__departureDateTimePickerInput", e);
                                            a.text("");
                                            t.modelpool.Acc = null;
                                            _.forEach(c, function (n) {
                                                $(n).hasClass("activeFlightList__departureListItem") ? r = n : $(n).hasClass("activeFlightList__destinationListItem") ? l = n : $(n).hasClass("activeFlightList__flightListItem") && (f = n)
                                            });
                                            $.ajax("/v1/destination/destinationbyid?destinationId=" + $(f).data("toareaid")).done(function (n) {
                                                var r = n.Item, i;
                                                r !== undefined && r.DataId > 0 ? (i = { data: r }, t.packageSearchModel(i, "destination"), u.val($(".text", f).text()), u.attr("countryid", t.getCountryId(i.data)), u.attr("areaid", t.getAreaId(i.data)), u.attr("placeid", t.getPlaceId(i.data)), u.attr("hotelid", t.getHotelId(i.data)), t.createNights()) : console.log("destination is not found!")
                                            });
                                            h = [{ Id: parseInt($(r).data("itemid")), Label: $(r).data("itemname") }];
                                            s.val($(r).data("itemname"));
                                            s.attr("itemid", $(r).data("itemid"));
                                            t.packageSearchModel(h, "departure");
                                            n = $(".date", f).text();
                                            o.val(n);
                                            o.data("daterange", 0);
                                            t.renderDateUI(o, n);
                                            t.packageSearchModel(0, "dateRange");
                                            t.packageSearchModel(n, "selectedDate");
                                            t.packageSearchModel(n, "beginDate");
                                            t.packageSearchModel(n, "endDate");
                                            i.modal("hide")
                                        }
                                    })
                                })
                            });
                            $(document).off("click", ".stepContainerDeparture .activeFlightList__departureList .activeFlightList__departureListItem").on("click", ".stepContainerDeparture .activeFlightList__departureList .activeFlightList__departureListItem", function () {
                                $(".activeFlightList__departureListItem.selected", i).removeClass("selected");
                                $(this).addClass("selected");
                                r($(this));
                                $(".stepContainerflightList .activeFlightList__flightList", i).empty()
                            });
                            r = function (t) {
                                var u = $(".stepContainerDeparture", i), r = $(".stepContainerDestination", i),
                                    f = $(".body", r), e = $(".activeFlightList__destinationList", f);
                                n.canvasloader.add(r);
                                $.ajax({
                                    type:     "get",
                                    url:      "/v1/geography/tocountryfilter",
                                    data:     { areaid: $(t).data("itemid") },
                                    datatype: "json",
                                    success:  function (n) {
                                        u.removeClass("active");
                                        u.addClass("completed");
                                        r.addClass("active");
                                        $(".activeFlightListFooter").removeClass("d-block");
                                        $(".summary", ".activeFlightListFooter").html("").addClass("d-none");
                                        $(".btnApplyModal", ".activeFlightListFooter").prop("disabled", !0);
                                        var t = "";
                                        n.length > 0 ? _.forEach(n, function (n) {
                                            t += '<li class="activeFlightList__destinationListItem" data-destinationid="' + n.Id + '">' + n.Name + "<\/li>"
                                        }) : t = "<li><div>No result...<\/div><\/li>";
                                        e.html(t)
                                    },
                                    complete: function () {
                                        n.canvasloader.remove(r)
                                    }
                                })
                            };
                            $(document).off("click", ".commonModal .activeFlightList__destinationListItem").on("click", ".commonModal .activeFlightList__destinationListItem", function () {
                                $(".activeFlightListFooter").removeClass("d-block");
                                $(".summary", ".activeFlightListFooter").html("").addClass("d-none");
                                $(".btnApplyModal", ".activeFlightListFooter").prop("disabled", !0);
                                $(".activeFlightList__destinationListItem.selected", i).removeClass("selected");
                                $(this).addClass("selected");
                                u($(this))
                            });
                            u = function (t) {
                                var f = $(".stepContainerDeparture", i), e = $("li.selected", f).data("itemid"),
                                    u = $(".stepContainerDestination", i), r = $(".stepContainerflightList", i),
                                    o = $(".body", r), s = $(".activeFlightList__flightList", o);
                                n.canvasloader.add(r);
                                $.ajax({
                                    type:     "get",
                                    url:      "/v1/flight/availabledate",
                                    data:     {
                                        fromAreaId:  parseInt(e),
                                        toCountryId: parseInt(t.data("destinationid"))
                                    },
                                    datatype: "json",
                                    success:  function (n) {
                                        u.removeClass("active");
                                        u.addClass("completed");
                                        r.addClass("active");
                                        var t = "";
                                        n.isSuccess ? t = "<li><div>An error occured...<\/div><\/li>" : n.Result.length > 0 ? _.forEach(n.Result, function (n) {
                                            t += '<li class="activeFlightList__flightListItem" data-toareaid="' + n.ToAreaId + '"><span class="text">' + n.ToAreaName + '<\/span><span class="date">' + moment(n.FlightDate, "x").format("DD.MM.YYYY") + "<\/span><\/li>"
                                        }) : t = "<li><div>No result...<\/div><\/li>";
                                        s.html(t)
                                    },
                                    complete: function () {
                                        n.canvasloader.remove(r)
                                    }
                                })
                            };
                            $(document).off("click", ".commonModal .activeFlightList__flightListItem").on("click", ".commonModal .activeFlightList__flightListItem", function () {
                                var n = $(".stepContainerflightList", i);
                                $(".activeFlightList__flightListItem.selected", i).removeClass("selected");
                                $(this).addClass("selected");
                                n.removeClass("active");
                                n.addClass("completed");
                                var t = $(".activeFlightList__departureListItem.selected").text(),
                                    r = $(".activeFlightList__destinationListItem.selected").text(),
                                    u = $(".text", this).text(), f = $(".date", this).text();
                                $(".summary", i).html("<p>" + i18n_en.partials.header.ChoiceText + " : <abbr>" + t + "<\/abbr> - <abbr>" + r + "<\/abbr> <span>&#9658;<\/span> <abbr>" + u + "<\/abbr> - <abbr>" + f + "<\/abbr><\/p>").removeClass("d-none");
                                $(".activeFlightListFooter").addClass("d-block");
                                $(".btnApplyModal", ".activeFlightListFooter").prop("disabled", !1)
                            });
                            $(document).off("click", ".commonModal .activeFlightListRow .back").on("click", ".commonModal .activeFlightListRow .back", function () {
                                var t = $(".stepContainerDeparture"), n = $(".stepContainerDestination"),
                                    i = $(".stepContainerflightList");
                                $(".activeFlightListFooter").removeClass("d-block");
                                $(".summary", ".activeFlightListFooter").html("").addClass("d-none");
                                $(".btnApplyModal", ".activeFlightListFooter").prop("disabled", !0);
                                switch ($(this).data("goto")) {
                                    case 1:
                                        n.removeClass("active").removeClass("completed");
                                        t.removeClass("completed").addClass("active");
                                        break;
                                    case 2:
                                        i.removeClass("active").removeClass("completed");
                                        n.removeClass("completed").addClass("active")
                                }
                            })
                        }, e = [], t = {
                            modelpool:                { Guest: { Adults: 0, Children: [] } },
                            checkSearch:              function (n) {
                                var e = n, ut = $(".container-topside"),
                                    i = $(".container-tabItemWrap").data("searchparams").PackageSearchQuery,
                                    w = $(".dynamicPackageSearch").data("packagesearch"), o, s, d, nt, tt, it, f, v, y,
                                    p, rt, h;
                                if (_.isNil(i) && localStorage.getItem("sess_ps") !== null && (moment(JSON.parse(localStorage.getItem("sess_ps")).expired, "x").format("x") < moment().format("x") ? localStorage.removeItem("sess_ps") : moment(JSON.parse(localStorage.getItem("sess_ps")).data.BeginDate).format("x") < moment().format("x") && moment(JSON.parse(localStorage.getItem("sess_ps")).data.EndDate).format("x") < moment().format("x") ? localStorage.removeItem("sess_ps") : (i = JSON.parse(localStorage.getItem("sess_ps")).data, o = moment().add(1, "days").format("YYYY-MM-DD"), moment(i.SelectedDate).isBefore(moment(o)) ? (i.SelectedDate = moment(o), i.DateRange = 0, i.BeginDate = moment(o), i.EndDate = moment(o)) : (i.SelectedDate = moment(i.SelectedDate, "YYYY-MM-DD"), i.BeginDate = moment(i.BeginDate, "YYYY-MM-DD"), i.EndDate = moment(i.EndDate, "YYYY-MM-DD")))), w && (i = w), _.isNil(i) || i === "") f = $(".packageSearch__departureInput", e), (_.isNil(f.val()) || f.val() === "") && (v = $(".geolocation-container", ut), $(".geolocation-current", v).length > 0 && (y = $(".geolocation-current", v).data("itemname"), p = $(".geolocation-current", v).data("itemid"), f.val(y), f.attr("itemname", y), f.attr("itemid", p), rt = [{
                                    Id:    parseInt(p),
                                    Label: y
                                }], t.packageSearchModel(rt, "departure"))), t.createNights(n), h = [2, 0], t.updatePassengerInputText(h[0], h[1]), t.packageSearchModel(h[0], "adult"), $(".adultInput").val(h[0]); else {
                                    i.Departures !== null && t.packageSearchModel(i.Departures, "departure");
                                    i.Destination !== null && t.packageSearchModel({ data: i.Destination[0] }, "destination");
                                    t.packageSearchModel(moment(i.BeginDate).format("DD.MM.YYYY"), "beginDate");
                                    t.packageSearchModel(moment(i.EndDate).format("DD.MM.YYYY"), "endDate");
                                    t.packageSearchModel(moment(i.SelectedDate).format("DD.MM.YYYY"), "selectedDate");
                                    t.packageSearchModel(i.DateRange, "dateRange");
                                    t.packageSearchModel(i.Acc, "nights");
                                    t.packageSearchModel(i.Guest, "searchparam_guest");
                                    var c = $(".packageSearch__destinationInput ", e),
                                        ft = i.Destination !== null ? i.Destination[0].TitleRu : null,
                                        et = i.Destination !== null ? t.getCountryId(i.Destination[0]) : null;
                                    c.val(ft);
                                    c.attr("countryid", et);
                                    c.attr("destinationid", i.Destination !== null ? i.Destination[0].Id : "");
                                    c.attr("nearestAirports", i.Destination !== null ? t.getNearestAirports(i.Destination[0]) : "");
                                    var b = $(".packageSearch__departureInput", e), l = null, k = void 0;
                                    i.Departures !== null && (l = i.Departures[0].TitleRu !== undefined && i.Departures[0].TitleRu !== null ? i.Departures[0].TitleRu : null, l = _.isNil(l) ? i.Departures[0].Label : null, k = i.Departures[0].Id !== null ? i.Departures[0].Id : null);
                                    b.val(l);
                                    b.attr("itemid", k);
                                    s = $(".packageSearch__departureDateTimePickerInput", e);
                                    d = moment(i.SelectedDate).format("DD.MM.YYYY");
                                    s.data("daterangepicker").setStartDate(moment(i.SelectedDate).format("DD/MM/YYYY"));
                                    s.val(d);
                                    s.data("daterange", i.DateRange);
                                    t.renderDateUI(s, i.SelectedDate);
                                    t.setNights(i.Acc);
                                    var r = $(".passengersContainer .packageSearch__passengerListContainer", e),
                                        g = i.Guest.Adults, a = _.isNil(i.Guest.Children) ? 0 : i.Guest.Children.length,
                                        ot = _.isNil(i.Guest.Children) ? [] : i.Guest.Children;
                                    t.updatePassengerInputText(g, a);
                                    nt = $(".adultInput", r);
                                    nt.val(g);
                                    tt = $(".childInput", r);
                                    tt.val(a);
                                    $(".childInput", r).val() !== "0" ? $(".passengerContainerChildTitle", r).show() : $(".passengerContainerChildTitle", r).hide();
                                    a !== 0 && (u(a), it = $(".childAgeMain", r), _.forEach(it, function (n, t) {
                                        $(".childAge" + (t + 1) + " .childAgeInput", r).val(ot[t])
                                    }))
                                }
                            },
                            destination:              function () {
                                var f = $(".destinationContainer", r),
                                    o = $(".packageSearch__destinationInput_mobile", f), u = !0,
                                    i = $(".packageSearch__destinationInput", f),
                                    h = i18n_en.partials.searchTabs.hotelSearch.noResult;
                                i.autocomplete({
                                    serviceUrl:                "/v1/search/destinations",
                                    paramName:                 "keyword",
                                    params:                    { type: "package" },
                                    dataType:                  "json",
                                    deferRequestBy:            300,
                                    minChars:                  3,
                                    showNoSuggestionNotice:    !1,
                                    noSuggestionNotice:        h,
                                    triggerSelectOnValidInput: !1,
                                    groupBy:                   "ModelType",
                                    autoSelectFirst:           !0,
                                    appendTo:                  o,
                                    beforeRender:              function () {
                                        i.removeAttr("dataid");
                                        i.removeAttr("countryid");
                                        i.removeAttr("nearestAirports");
                                        i.removeAttr("destinationid")
                                    },
                                    onSearchStart:             function (n) {
                                        String(n.keyword).indexOf("(") && (n.keyword = String(n.keyword).split("(")[0].trim())
                                    },
                                    onSearchComplete:          function (n, t) {
                                        if (i.removeData("firstSuggestion"), !_.isEmpty(t)) {
                                            i.data("firstSuggestion", t[0]);
                                            $(".autoComplete_SearchText").remove();
                                            var r = { 5: "&#xe53a", 4: "&#xe0c8", 1: "&#xe0c8" };
                                            t = $(".autocomplete-suggestion", o).each(function (n) {
                                                var i = t[n].data, u = r[i.ModelType];
                                                $(this).prepend('<i class="material-icons">' + u + "<\/i>");
                                                _.isNil(i.ParentTitleRu) || $(this).append('<span class="titleru">' + i.ParentTitleRu + "<\/span>")
                                            })
                                        }
                                    },
                                    transformResult:           function (n) {
                                        return {
                                            suggestions: $.map(n.Results, function (n) {
                                                return { value: _.isNil(n.TitleRu) ? n.Title : n.TitleRu, data: n }
                                            })
                                        }
                                    },
                                    onSelect:                  function (r) {
                                        s(r, i);
                                        t.createNights();
                                        u ? ($(".packageSearch__destinationInput_mobile").removeClass("show"), n.preventpagescroll.remove(), $(this).trigger("blur")) : ($(".packageSearch__destinationInput_mobile").addClass("show"), n.preventpagescroll.onlymobile());
                                        u = !0
                                    },
                                    onHide:                    function () {
                                    }
                                });
                                i.on("focus", function () {
                                    e($(this));
                                    $(".packageSearch__destinationInput_mobile").addClass("show");
                                    n.preventpagescroll.onlymobile();
                                    u = !1
                                });
                                i.on("blur", function () {
                                    e($(this));
                                    u = !0
                                });
                                i.on("keyup", function () {
                                    _.isEmpty($(this).val()) && e($(this));
                                    $(".packageSearch__destinationInput_mobile").hasClass("show") || $(this).attr("dataid") !== undefined || ($(".packageSearch__destinationInput_mobile").addClass("show"), n.preventpagescroll.onlymobile())
                                });
                                $(".mobileclose", ".packageSearch__destinationInput_mobile").on("click", function () {
                                    $(".packageSearch__destinationInput", ".packageSearch__destinationInput_mobile").autocomplete("hide");
                                    $(".packageSearch__destinationInput_mobile").removeClass("show");
                                    n.preventpagescroll.remove()
                                });
                                var s = function (n, i) {
                                    t.packageSearchModel(n, "destination");
                                    i.val(n.value);
                                    i.attr("dataid", n.data.DataId);
                                    i.attr("destinationid", n.data.Id);
                                    i.attr("countryid", t.getCountryId(n.data));
                                    i.attr("areaid", t.getAreaId(n.data));
                                    i.attr("placeid", t.getPlaceId(n.data));
                                    i.attr("hotelid", t.getHotelId(n.data));
                                    i.attr("nearestAirports", t.getNearestAirports(n.data))
                                }, e = function (n) {
                                    setTimeout(function () {
                                        var t = n.data("firstSuggestion");
                                        _.isEmpty(t) || _.isEmpty(n.val()) ? (n.val(""), n.removeAttr("dataid"), n.removeAttr("countryid"), n.removeAttr("areaid"), n.removeAttr("placeid"), n.removeAttr("hotelid"), n.removeAttr("nearestAirports"), n.removeAttr("destinationid"), n.closest(".destinationContainer").find(".autoComplete_SearchText").remove()) : n.attr("dataid") !== undefined || (s(t, n), n.val(t.value))
                                    }, 1)
                                }, c = $(".addonButton", f), l = $(".modalActiveFlightProgram");
                                c.on("click", function () {
                                    l.modal("show")
                                })
                            },
                            getCountryId:             function (n) {
                                return n.ModelType === 1 || n.ModelType === "country" ? n.DataId : n.ModelType === 6 || n.ModelType === "area" ? n.ParentDataId : n.ModelType === 4 || n.ModelType === "place" || n.ModelType === 5 || n.ModelType === "hotel" ? n.TopDataId : void 0
                            },
                            getAreaId:                function (n) {
                                return n.ModelType === 1 || n.ModelType === "country" ? null : n.ModelType === 6 || n.ModelType === "area" ? n.DataId : n.ModelType === 4 || n.ModelType === "place" ? n.ParentDataId : n.ModelType === 5 || n.ModelType === "hotel" ? null : void 0
                            },
                            getPlaceId:               function (n) {
                                return n.ModelType === 1 || n.ModelType === "country" ? null : n.ModelType === 4 || n.ModelType === "place" ? n.DataId : n.ModelType === 5 || n.ModelType === "hotel" ? n.ParentDataId : n.ModelType === 6 || n.ModelType === "area" ? null : void 0
                            },
                            getNearestAirports:       function (n) {
                                return n.NearestAirports === undefined || n.NearestAirports === null || n.NearestAirports.length === 0 ? null : _.join(n.NearestAirports)
                            },
                            getHotelId:               function (n) {
                                return n.ModelType === 1 || n.ModelType === "country" ? null : n.ModelType === 4 || n.ModelType === "place" ? null : n.ModelType === 5 || n.ModelType === "hotel" ? n.DataId : n.ModelType === 6 || n.ModelType === "area" ? null : void 0
                            },
                            departure:                function () {
                                var e = $(r), f = $(".departureContainer", e),
                                    i = $(".packageSearch__departureInput", f),
                                    u = $(".packageSearch__departureList", f),
                                    o = $(".packageSearch__departureListItem", u);
                                $(document).on("click", function (t) {
                                    if ($(t.target).hasClass("departureContainer") || $(t.target).hasClass("packageSearch__departureInputContainer") || $(t.target).hasClass("packageSearch__addon-icon")) {
                                        f.addClass("showlist");
                                        e.addClass("showlist");
                                        u.slideDown("fast");
                                        n.preventpagescroll.onlymobile();
                                        i.removeClass("validateError");
                                        i.popover("dispose");
                                        var r = i.attr("itemid");
                                        $("li", u).removeClass("selected");
                                        $("li[data-itemid=" + r + "]", u).addClass("selected")
                                    } else $(t.target).hasClass("packageSearch__departureInput") || $(t.target).hasClass("packageSearch__departureList") || $(t.target).hasClass("departureLabel") || (u.slideUp("fast"), f.removeClass("showlist"), e.removeClass("showlist"), $("li", u).removeClass("selected"))
                                });
                                $("input").on("focus", function (t) {
                                    if ($(t.target).hasClass("packageSearch__departureInput") || $(t.target).hasClass("packageSearch__addon-icon")) {
                                        i.val("");
                                        i.trigger("keyup");
                                        f.addClass("showlist");
                                        u.slideDown("fast");
                                        n.preventpagescroll.onlymobile();
                                        i.removeClass("validateError");
                                        i.popover("dispose");
                                        var r = i.attr("itemid");
                                        $("li", u).removeClass("selected");
                                        $("li[data-itemid=" + r + "]", u).addClass("selected")
                                    } else u.slideUp("fast"), f.removeClass("showlist"), $("li", u).removeClass("selected")
                                });
                                $(".mobileclose", f).on("click", function () {
                                    u.slideUp("fast");
                                    f.removeClass("showlist");
                                    $("li", u).removeClass("selected")
                                });
                                o.on("click", function () {
                                    i.attr("itemid", $(this).data("itemid"));
                                    i.attr("itemname", $(this).data("itemname"));
                                    i.val($(this).data("itemname"));
                                    var r = $(this).data("itemid"), u = $(this).data("itemname"),
                                        f = [{ Id: parseInt(r), Label: u }];
                                    t.packageSearchModel(f, "departure");
                                    t.createNights();
                                    n.preventpagescroll.remove()
                                });
                                i.on("blur", function () {
                                    t.packageSearchModel(null, "departure");
                                    n.preventpagescroll.remove()
                                });
                                i.on("keyup", function () {
                                    var n = $(this).val().toLowerCase();
                                    o.filter(function () {
                                        $(this).toggle(String($(this).text()).toLowerCase().indexOf(n) > -1)
                                    })
                                })
                            },
                            departureDateTimePicker:  function () {
                                var c = $(".departureDateTimePickerContainer", r),
                                    i = $(".packageSearch__departureDateTimePickerInput", c), h = 7, u = new Date, f, s,
                                    e, o;
                                u.setDate(u.getDate() + 1);
                                f = i18n_en.daterangepicker.locale;
                                f.direction = "package_datepicker";
                                f.applyLabel = "Готово";
                                s = '<div class="daterangepicker">\n          <div class="header">\n            <div class="title">Период вылета<\/div>\n            <div class="mobileclose"><i class="material-icons">&#xe5cd<\/i><\/div>\n          <\/div>\n          <div class="datetimepicker-toggle">\n            <div class="ranges"><\/div>\n              <div class="drp-calendar left">\n                <div class="calendar-table"><\/div>\n                <div class="calendar-time"><\/div>\n              <\/div>\n              <div class="drp-calendar right">\n                <div class=""><\/div>\n                <div class="calendar-table"><\/div>\n                <div class="calendar-time"><\/div>\n              <\/div>\n              <div class="clearfix"><\/div>\n              <div class="drp-footer">\n                <div class="notAvaiableDays">' + i18n_en.partials.searchTabs.packageSearch.departureTimePicker.notavaiable + '<\/div>\n                <div class="float-right drp-buttons">\n                  <button class="cancelBtn" type="button">' + i18n_en.partials.searchTabs.packageSearch.departureTimePicker.btnApplyDates + "<\/button>\n                <\/div>\n              <\/div>\n            <\/div>\n          <\/div>";
                                e = {
                                    template:         s,
                                    buttonClasses:    "btn btn-primary",
                                    minDate:          new Date,
                                    maxDate:          !1,
                                    isPackageSearch:  !0,
                                    singleDatePicker: !0,
                                    autoUpdateInput:  !0,
                                    linkedCalendars:  !0,
                                    showDropdowns:    !1,
                                    autoApply:        !1,
                                    parentEl:         $(i).closest(".packagetour"),
                                    startDate:        moment(u).format("DD.MM.YYYY"),
                                    maxSpan:          { days: h },
                                    isInvalidDate:    function () {
                                        return !1
                                    },
                                    locale:           f
                                };
                                $.extend(_DATEPICKER_DEFAULTS, e);
                                i.daterangepicker(_DATEPICKER_DEFAULTS, function () {
                                });
                                i.off("focus").on("focus", function () {
                                    var c = i.val(), o = i.data("daterange"), r;
                                    if (_.isNil(o) && (o = 0), n.preventpagescroll.onlymobile(), i.data("daterangepicker").remove(), i.data("availabledates", null), $(".packageSearch__departureInput").val() === "" || _.isNil($(".packageSearch__departureInput").val()) || $(".packageSearch__destinationInput").val() === "" || _.isNil($(".packageSearch__destinationInput").val())) {
                                        e.startDate = c;
                                        $.extend(_DATEPICKER_DEFAULTS, e);
                                        i.daterangepicker(_DATEPICKER_DEFAULTS, function () {
                                        });
                                        i.off("dateclicked.daterangepicker").on("dateclicked.daterangepicker", function (n, i) {
                                            var r = t.generateRangeOptions(i.startDate, null);
                                            $(".rangeoptions", i.container).remove();
                                            $(r).insertAfter($("td.available.active:not(.off)", i.container).closest("tr"));
                                            $(document).off("click", ".rangeoptions button").on("click", ".rangeoptions button", function () {
                                                $(".rangeoptions").remove()
                                            });
                                            $(".rangeoptions", i.container).length === 1 && $(".rangeoptions", i.container).trigger("click")
                                        });
                                        i.data("daterangepicker").show()
                                    } else r = [], setTimeout(function () {
                                        $.ajax({
                                            type:     "get",
                                            url:      "/v1/flight/availablealldate",
                                            data:     {
                                                fromAreaId:      parseInt($(".packageSearch__departureInput").attr("itemid")),
                                                toCountryId:     parseInt($(".packageSearch__destinationInput").attr("countryid")),
                                                toAreaId:        $(".packageSearch__destinationInput").attr("areaid"),
                                                destinationId:   $(".packageSearch__destinationInput").attr("destinationid"),
                                                nearestAirports: $(".packageSearch__destinationInput").attr("nearestAirports")
                                            },
                                            datatype: "json",
                                            success:  function (n) {
                                                var e, l;
                                                if (!_.isNil(n)) {
                                                    _.forEach(n.Result, function (n) {
                                                        r.push(moment(n, "x").format("DD.MM.YYYY"))
                                                    });
                                                    e = moment(u).format("DD.MM.YYYY");
                                                    _.isNil(c) || (e = c);
                                                    r.length > 0 && _.indexOf(r, e) === -1 && (e = r[0], o = 0);
                                                    l = {
                                                        template:         s,
                                                        buttonClasses:    "btn btn-primary",
                                                        minDate:          new Date,
                                                        maxDate:          !1,
                                                        isPackageSearch:  !0,
                                                        singleDatePicker: !0,
                                                        autoUpdateInput:  !0,
                                                        linkedCalendars:  !0,
                                                        autoApply:        !1,
                                                        parentEl:         $(i).closest(".packagetour"),
                                                        startDate:        e,
                                                        locale:           f,
                                                        maxSpan:          { days: h },
                                                        isInvalidDate:    function (n) {
                                                            var i = moment(n).format("DD.MM.YYYY"), t = !0;
                                                            return $.each(r, function (n, r) {
                                                                if (r === i) return t = !1, !0
                                                            }), t
                                                        }
                                                    };
                                                    $.extend(_DATEPICKER_DEFAULTS, l);
                                                    i.daterangepicker(_DATEPICKER_DEFAULTS, function () {
                                                    });
                                                    i.off("dateclicked.daterangepicker").on("dateclicked.daterangepicker", function (n, i) {
                                                        var u = t.generateRangeOptions(i.startDate, r);
                                                        $(".rangeoptions", i.container).remove();
                                                        $(u).insertAfter($("td.available.active:not(.off)", i.container).closest("tr"));
                                                        $(document).off("click", ".rangeoptions button").on("click", ".rangeoptions button", function () {
                                                            $(".rangeoptions").remove()
                                                        });
                                                        $(".rangeoptions", i.container).find("input").length === 1 && $(".rangeoptions", i.container).find("input").trigger("click")
                                                    });
                                                    i.data("availabledates", r);
                                                    i.data("daterange", o);
                                                    t.renderDateUI(i, e)
                                                }
                                            }
                                        }).then(function () {
                                            i.data("daterangepicker").show()
                                        })
                                    }, 10);
                                    i.off("cancel.daterangepicker").on("cancel.daterangepicker", function () {
                                        n.preventpagescroll.remove()
                                    });
                                    $(document).off("click", ".mobileclose").on("click", ".mobileclose", function () {
                                        n.preventpagescroll.remove();
                                        i.data("daterangepicker").hide()
                                    })
                                });
                                i.off("click").on("click", function () {
                                    $(".daterangepicker", r).css("display") === "none" && $(".daterangepicker", r).slideDown("fast")
                                });
                                t.renderDateUI(i, u);
                                o = $(i).val();
                                t.packageSearchModel(o, "selectedDate");
                                t.packageSearchModel(0, "dateRange");
                                t.packageSearchModel(o, "beginDate");
                                t.packageSearchModel(o, "endDate");
                                t.createNights()
                            },
                            generateRangeOptions:     function (i, r) {
                                var f, e, u;
                                i = i.format();
                                var o = [], s = [], h = !0, c = !0;
                                if (r !== null) {
                                    for (f = -3; f <= 3; f++) f !== 0 && o.push(moment(i).add(f, "days").format("DD.MM.YYYY"));
                                    for (h = _.intersection(o, r).length > 0, e = 1; e <= 7; e++) s.push(moment(i).add(e, "days").format("DD.MM.YYYY"));
                                    c = _.intersection(s, r).length > 0
                                }
                                u = '<tr class="rangeoptions"><td colspan="7"><p>' + i18n_en.partials.searchTabs.packageSearch.departureTimePicker.rangeOptions + "<\/p>";
                                u += '<div class="options">';
                                u += "<div>";
                                u += '<div class="custom-control custom-radio">';
                                u += '<input type="radio" id="rangeSelection0" name="rangeSelection" value="0" class="custom-control-input">';
                                u += '<label class="custom-control-label" for="rangeSelection0">' + i18n_en.partials.searchTabs.packageSearch.departureTimePicker.rangeSelection0 + "<\/label>";
                                u += "<\/div>";
                                u += "<\/div>";
                                h && (u += "<div>", u += '<div class="custom-control custom-radio">', u += '<input type="radio" id="rangeSelection3" name="rangeSelection" value="3" class="custom-control-input">', u += '<label class="custom-control-label" for="rangeSelection3">' + i18n_en.partials.searchTabs.packageSearch.departureTimePicker.rangeSelection7 + "<\/label>", u += "<\/div>", u += "<\/div>");
                                c && (u += "<div>", u += '<div class="custom-control custom-radio">', u += '<input type="radio" id="rangeSelection7" name="rangeSelection" value="7" class="custom-control-input">', u += '<label class="custom-control-label" for="rangeSelection7">' + i18n_en.partials.searchTabs.packageSearch.departureTimePicker.rangeSelection3 + "<\/label>", u += "<\/div>", u += "<\/div>");
                                u += "<\/div>";
                                u += "<\/td><\/tr>";
                                $(".packageSearch__departureDateTimePickerInput", ".container-tabItemWrap .departureDateTimePickerContainer").on("apply.daterangepicker", function () {
                                    var i = $(".packageSearch__departureDateTimePickerInput", ".container-tabItemWrap .departureDateTimePickerContainer"),
                                        r = i.val(), u;
                                    i.data("daterange", $("input[name=rangeSelection]:checked").val());
                                    t.renderDateUI(i, r);
                                    u = t.getActualDates(i.data("availabledates"), r, i.data("daterange"));
                                    t.packageSearchModel(r, "selectedDate");
                                    t.packageSearchModel(i.data("daterange"), "dateRange");
                                    t.packageSearchModel(u.start, "beginDate");
                                    t.packageSearchModel(u.end, "endDate");
                                    t.createNights();
                                    n.preventpagescroll.remove()
                                });
                                return u
                            },
                            getActualDates:           function (n, t, i) {
                                var r = { start: t, end: t }, u;
                                return n !== null ? (u = _.indexOf(n, t), i === "3" ? (r.start = u <= 2 ? n[0] : n[u - 3], r.end = u >= n.length - 3 ? n[n.length - 1] : n[u + 3]) : i === "7" && (r.end = u >= n.length - 7 ? n[n.length - 1] : n[u + 7])) : i === "3" ? (r.start = moment(t, "DD.MM.YYYY").diff(moment(), "days", !0) < 3 ? moment().format("DD.MM.YYYY") : moment(t, "DD.MM.YYYY").add(-3, "days").format("DD.MM.YYYY"), r.end = moment(t, "DD.MM.YYYY").add(3, "days").format("DD.MM.YYYY")) : i === "7" && (r.end = moment(t, "DD.MM.YYYY").add(7, "days").format("DD.MM.YYYY")), r
                            },
                            generateRangeText:        function (n) {
                                var t = "";
                                return n === "3" ? t = '<span class="badge badge-success">' + i18n_en.partials.searchTabs.packageSearch.departureTimePicker.rangeBadge3Days + "<\/span>" : n === "7" && (t = '<span class="badge badge-success">' + i18n_en.partials.searchTabs.packageSearch.departureTimePicker.rangeBadge7Days + "<\/span>"), t
                            },
                            renderDateUI:             function (n, i) {
                                var r = t.generateRangeText(n.data("daterange")),
                                    u = moment(i, ["DD.MM.YYYY", "x", moment.ISO_8601]).format("DD.MM.YYYY") + r;
                                return n.closest("div").find("span").html(u)
                            },
                            nights:                   function (i) {
                                var r = $(".nightsContainer", i), u = $(".packageSearch__NightsListContainer ", r);
                                $(document).on("click", function (i) {
                                    $(i.target).hasClass("packageSearch__NightsText") || $(i.target).hasClass("slctInputItem") || $(i.target).hasClass("btnNightsIcon") || $(i.target).hasClass("packageSearch__NightsInput_addon_icon") || $(i.target).hasClass("packageSearch__NightsInput") ? (r.hasClass("firstRender") && localStorage.getItem("sess_ps") === null && _.isNil($(".container-tabItemWrap").data("searchparams").PackageSearchQuery) && (t.setNights([]), r.removeClass("firstRender")), t.createNights(), u.slideToggle("fast"), $(".pageloading").css("display", "none"), r.toggleClass("listshow"), n.preventpagescroll.onlymobile()) : $(i.target).hasClass("nightItem") || $(i.target).hasClass("selectedNights") || $(i.target).hasClass("packageSearch__NightsListContainer") || $(i.target).hasClass("nightsListFooter") || $(i.target).hasClass("notAvaiableFlights") || $(i.target).hasClass("nightsListHeader") || $(i.target).hasClass("nightsListBody") || $(i.target).hasClass("packageSearch__NightsList") || $(i.target).hasClass("btnSelectNights") || $(i.target).hasClass("btnSelectNightsFooter") || $(i.target).hasClass("spanDateforNights") || (u.slideUp("fast"), r.removeClass("listshow"));
                                    ($(i.target).hasClass("mobileclose") || $(i.target).closest(".mobileclose").length > 0 || $(i.target).hasClass("btnSelectNightsFooter")) && n.preventpagescroll.remove()
                                });
                                $(".nightsContainer").on("click", ".nightItem:not(.flight-off)", function () {
                                    var n = t.getNights();
                                    if ($(this).hasClass("selected")) _.pull(n, $(this).text(), parseInt($(this).text())); else {
                                        if (n.length >= 8) return alert(i18n_en.partials.searchTabs.packageSearch.errorMessages.nightMaxText + ""), !1;
                                        n.push(parseInt($(this).text()))
                                    }
                                    t.setNights(n.sort(function (n, t) {
                                        return parseInt(n) - parseInt(t)
                                    }))
                                });
                                $(".btnSelectNightsFooter", ".nightsContainer").on("click", function () {
                                    $(".nightsContainer").removeClass("listshow");
                                    $(".packageSearch__NightsListContainer", ".nightsContainer").slideUp("fast");
                                    n.preventpagescroll.remove()
                                })
                            },
                            createNights:             function () {
                                var n = function (n) {
                                    if (n !== undefined) {
                                        var r = "", i = void 0;
                                        n === null && (n = []);
                                        t.modelpool.Acc === undefined ? (i = [7, 8, 9, 10, 11, 12, 13, 14], t.modelpool.Acc = i) : i = n.length > 0 ? _.intersection(t.modelpool.Acc, n) : t.modelpool.Acc;
                                        _.times(30, function (t) {
                                            var i = t + 1, u = _.indexOf(n, i) === -1 ? " flight-off" : "";
                                            r += '<div class="nightItem' + u + '" data-night="' + t + '">' + i + "<\/div>"
                                        });
                                        $("> div", ".packageSearch__NightsList").html(r);
                                        i !== t.modelpool.Acc && t.setNights(i, n)
                                    }
                                };
                                _.isNil(t.modelpool.Departures) ? $("div[data-enabledacc]").length > 0 && $("div[data-searchparams]").data("searchparams") === "" ? (n($("div[data-enabledacc]").data("enabledacc")), $("div[data-enabledacc]").removeAttr("data-enabledacc")) : n([7, 14]) : $("div[data-enabledacc]").length <= 0 ? $.ajax({
                                    method:   "get",
                                    url:      "/v1/flight/availablenights",
                                    data:     {
                                        fromAreaId:      t.modelpool.Departures[0].Id,
                                        destinationId:   t.modelpool.Destination !== undefined && t.modelpool.Destination !== null ? t.modelpool.Destination[0].Id : 0,
                                        toCountryId:     t.modelpool.Destination !== undefined && t.modelpool.Destination !== null ? t.getCountryId(t.modelpool.Destination[0]) : 0,
                                        toAreaId:        t.modelpool.Destination !== undefined && t.modelpool.Destination !== null ? t.getAreaId(t.modelpool.Destination[0]) : null,
                                        toPlaceId:       t.modelpool.Destination !== undefined && t.modelpool.Destination !== null ? t.getPlaceId(t.modelpool.Destination[0]) : null,
                                        nearestAirports: t.modelpool.Destination !== undefined && t.modelpool.Destination !== null ? t.getNearestAirports(t.modelpool.Destination[0]) : null,
                                        beginDate:       t.modelpool.BeginDate,
                                        endDate:         t.modelpool.EndDate
                                    },
                                    datatype: "json",
                                    success:  function (t) {
                                        n(t.Result)
                                    }
                                }) : (n($("div[data-enabledacc]").data("enabledacc")), $("div[data-enabledacc]").removeAttr("data-enabledacc"))
                            },
                            setNights:                function (t, i) {
                                if (i && t === [] && (t = [i[0]]), t !== undefined) {
                                    $("input.packageSearch__NightsInput", ".nightsContainer").val(n.nightmethods.arraytostring(t));
                                    var r = "";
                                    t.length <= 0 ? $(".selectedNights", ".nightsContainer").empty() : (_.forEach(t, function (n) {
                                        r += "<span>" + n + "<\/span>"
                                    }), $(".selectedNights", ".nightsContainer").html(r));
                                    this.selectNights(t);
                                    this.packageSearchModel(t, "nights")
                                }
                            },
                            getNights:                function () {
                                var t = $("input.packageSearch__NightsInput", ".nightsContainer").val();
                                return t !== "" ? n.nightmethods.stringtoarray(t) : []
                            },
                            selectNights:             function (n) {
                                $(".packageSearch__NightsList > div > .nightItem").removeClass("selected");
                                _.forEach(n, function (n) {
                                    $(".packageSearch__NightsList > div > .nightItem:eq(" + (n - 1) + ")").addClass("selected")
                                })
                            },
                            passenger:                function (i) {
                                var y = $(".passengersContainer", i),
                                    v = $(".packageSearch__passengerListContainer", y), c = $(".adultContainer", v),
                                    r = $(".adultInput", c), l = 9, a = 1, s = $(".childContainer", v),
                                    e = $(".childInput", s), h = 3, o = 0, p = function () {
                                        $(".adultUp", c).off("click").on("click", function () {
                                            var n = parseInt(r.val()), i = void 0;
                                            i = n >= l ? n : n + 1;
                                            r.val(i);
                                            t.updatePassengerInputText(r.val(), e.val());
                                            t.packageSearchModel(r.val(), "adult")
                                        });
                                        $(".adultInput", c).on("focusout", function () {
                                            f.checkinput($(this), a, l);
                                            t.updatePassengerInputText(r.val(), e.val());
                                            t.packageSearchModel(r.val(), "adult")
                                        });
                                        $(".adultInput", c).on("keypress keyup keydown", function () {
                                            var n = new RegExp("^[0-9]{0,9}$");
                                            n.test($(this).val()) || ($(this).val(""), $(this).val(0), t.updatePassengerInputText(r.val(), e.val()));
                                            $(this).val().length > l ? ($(this).val(l), t.updatePassengerInputText(r.val(), e.val())) : $(this).val().length < a && ($(this).val(a), t.updatePassengerInputText(r.val(), e.val()));
                                            f.checkinput($(this), a, l);
                                            t.updatePassengerInputText(r.val(), e.val());
                                            t.packageSearchModel(r.val(), "adult")
                                        });
                                        $(".adultDown", c).off("click").on("click", function () {
                                            var n = $(".adultInput", c), i = parseInt(n.val()), r = void 0;
                                            r = i <= a ? i : i - 1;
                                            n.val(r);
                                            t.updatePassengerInputText(n.val(), e.val());
                                            t.packageSearchModel(n.val(), "adult")
                                        })
                                    }, w = function () {
                                        $(".childUp", s).off("click").on("click", function () {
                                            var n = parseInt(e.val()), i = void 0;
                                            i = n >= h ? n : n + 1;
                                            e.val(i);
                                            u(i);
                                            t.updatePassengerInputText(r.val(), e.val())
                                        });
                                        $(".childInput", s).on("change", function () {
                                            parseInt(e.val()) <= o && (e.val(o), u(o), t.updatePassengerInputText(r.val(), e.val()));
                                            f.checkinput($(this), o, h);
                                            u(e.val());
                                            t.updatePassengerInputText(r.val(), e.val())
                                        });
                                        $(".childInput", s).on("focusout", function () {
                                            u(parseInt($(this).val()));
                                            f.checkinput($(this), o, h);
                                            t.updatePassengerInputText(r.val(), e.val())
                                        });
                                        $(".childInput", s).on("keypress keyup keydown", function () {
                                            var n = new RegExp("^[0-9]{0,9}$");
                                            n.test($(this).val()) || ($(this).val(""), $(this).val(o), u(o), t.updatePassengerInputText(r.val(), e.val()));
                                            $(this).val().length > h ? ($(this).val(h), u(h), t.updatePassengerInputText(r.val(), e.val())) : $(this).val().length < o && ($(this).val(o), u(o), t.updatePassengerInputText(r.val(), e.val()));
                                            f.checkinput($(this), o, h);
                                            t.updatePassengerInputText(r.val(), e.val())
                                        });
                                        $(".childDown", s).off("click").on("click", function () {
                                            var n = $(".childInput", s), i = parseInt(n.val()), f = void 0;
                                            f = i <= o ? i : i - 1;
                                            n.val(f);
                                            u(f);
                                            t.updatePassengerInputText(r.val(), n.val())
                                        })
                                    }, b = function () {
                                        $(document).on("click", function (t) {
                                            $(t.target).hasClass("packageSearch__passengersInput") || $(t.target).hasClass("packageSearch__passenger-addon-icon") || $(t.target).hasClass("packageSearch__passengerInputContainer") ? (v.slideToggle("fast"), y.toggleClass("listshow"), n.preventpagescroll.onlymobile()) : $(t.target).hasClass("packageSearch__passengerListContainer") || $(t.target).hasClass("passengerContainerRow") || $(t.target).hasClass("passengerContainerCol") || $(t.target).hasClass("adultContainer") || $(t.target).hasClass("adultInput") || $(t.target).hasClass("adultDown") || $(t.target).hasClass("adultUp") || $(t.target).hasClass("adultUpIcon") || $(t.target).hasClass("adultDownIcon") || $(t.target).hasClass("adultLabel") || $(t.target).hasClass("childLabel") || $(t.target).hasClass("childInput") || $(t.target).hasClass("childUp") || $(t.target).hasClass("childDown") || $(t.target).hasClass("childDownIcon") || $(t.target).hasClass("childUpIcon") || $(t.target).hasClass("childContainer") || $(t.target).hasClass("childAgeContainer") || $(t.target).hasClass("childAgeLabel") || $(t.target).hasClass("childAgeInput") || $(t.target).hasClass("childAgeUp") || $(t.target).hasClass("childAgeDown") || $(t.target).hasClass("childAgeUpIcon") || $(t.target).hasClass("childAgeDownIcon") || $(t.target).hasClass("childAgeMain") || (v.slideUp("fast"), y.removeClass("listshow"));
                                            ($(t.target).hasClass("mobileclose") || $(t.target).hasClass("btnSelectPassengers")) && n.preventpagescroll.remove();
                                            $(window).on("scroll", function () {
                                            })
                                        })
                                    };
                                t.updatePassengerInputText(r.val(), e.val());
                                p();
                                w();
                                b();
                                t.packageSearchModel(r.val(), "adult")
                            },
                            updatePassengerInputText: function (n, t) {
                                var r = $(".passengersContainer"), u = $(".packageSearch__passengersInput", r), f, i, e,
                                    o;
                                if (n = parseInt(n), t = parseInt(t), f = "", i = "", f = n < 2 ? t < 2 ? t === 0 ? n + " " + i18n_en.partials.searchTabs.packageSearch.passenger.adultShort : n + " " + i18n_en.partials.searchTabs.packageSearch.passenger.adultShort + ", " + t + " " + i18n_en.partials.searchTabs.packageSearch.passenger.childShort : n + " " + i18n_en.partials.searchTabs.packageSearch.passenger.adultShort + ", " + t + " " + i18n_en.partials.searchTabs.packageSearch.passenger.childrenShort : t < 2 ? t === 0 ? n + " " + i18n_en.partials.searchTabs.packageSearch.passenger.adultsShort : n + " " + i18n_en.partials.searchTabs.packageSearch.passenger.adultsShort + ", " + t + " " + i18n_en.partials.searchTabs.packageSearch.passenger.childShort : n + " " + i18n_en.partials.searchTabs.packageSearch.passenger.adultsShort + ", " + t + " " + i18n_en.partials.searchTabs.packageSearch.passenger.childrenShort, n <= 2 && t <= 2) {
                                    for (e = 0; e < n; e++) i += '<i class="icon-person"><\/i>';
                                    for (o = 0; o < t; o++) i += '<i class="icon-person child"><\/i>'
                                } else i += "<abbr>" + n + '<\/abbr><i class="icon-person"><\/i>', t > 0 && (i += "<abbr>" + t + '<\/abbr><i class="icon-person child"><\/i>');
                                u.val(f);
                                $(u).next("span.iconPresentation").html(i);
                                u.data("adult", n);
                                u.data("child", t);
                                $(".childInput", r).val() !== "0" ? $(".passengerContainerChildTitle", r).show() : $(".passengerContainerChildTitle", r).hide()
                            },
                            packageSearchModel:       function (n, i) {
                                if (i === "destination") t.modelpool.Destination = n !== null ? [n.data] : null; else if (i === "departure") t.modelpool.Departures = n; else if (i === "selectedDate") t.modelpool.SelectedDate = moment(n, "DD.MM.YYYY").format("YYYY-MM-DD"); else if (i === "dateRange") t.modelpool.DateRange = n; else if (i === "beginDate") t.modelpool.BeginDate = moment(n, "DD.MM.YYYY").format("YYYY-MM-DD"); else if (i === "endDate") t.modelpool.EndDate = moment(n, "DD.MM.YYYY").format("YYYY-MM-DD"); else if (i === "nights") {
                                    var r = [];
                                    _.each(n, function (n) {
                                        r.push(parseInt(n))
                                    });
                                    t.modelpool.Acc = r
                                } else i === "adult" ? t.modelpool.Guest.Adults = parseInt(n) : i === "childAge" ? t.modelpool.Guest.Children = n : i === "searchparam_guest" && (_.isNil(n.Children) && (n.Children = []), t.modelpool.Guest = n)
                            },
                            sendform:                 function (i) {
                                var r = this.packageSearchValidate(i), f, u, e;
                                r.a === !0 && r.b === !0 && r.c === !0 && r.d === !0 && r.e === !0 && (n.travelloader.show(), $("input", ".packagetour").attr("disabled", "disabled"), $("input", ".packagetour").addClass("disabled"), $(".packageSearch__NightsInput", ".packagetour").addClass("disabled"), f = moment(new Date).add(30, "days").format("x"), localStorage.setItem("sess_ps", JSON.stringify({
                                    expired: f,
                                    data:    t.modelpool
                                })), u = t.modelpool.Destination[0].ModelType, u === 5 || u === "hotel" ? (e = window.open(), $.ajax({
                                    type:     "POST",
                                    url:      "/v1/package/search",
                                    dataType: "JSON",
                                    data:     t.modelpool,
                                    success:  function (t) {
                                        e.location.href = t;
                                        n.travelloader.hide();
                                        $("input", ".packagetour").removeAttr("disabled", "disabled");
                                        $("input", ".packagetour").removeClass("disabled");
                                        $(".packageSearch__NightsInput", ".packagetour").removeClass("disabled")
                                    },
                                    error:    function () {
                                        n.travelloader.hide()
                                    }
                                })) : $.ajax({
                                    type:     "POST",
                                    url:      "/v1/package/search",
                                    dataType: "JSON",
                                    data:     t.modelpool,
                                    success:  function (n) {
                                        window.location.href = n
                                    },
                                    error:    function () {
                                        n.travelloader.hide()
                                    }
                                }))
                            },
                            packageSearchValidate:    function (n) {
                                var t = $(".destinationContainer .packageSearch__destinationInput", n),
                                    i = $(".departureContainer .packageSearch__departureInput", n),
                                    f = $(".departureDateTimePickerContainer .packageSearch__departureDateTimePickerInput ", n),
                                    r = $(".passengersContainer .packageSearch__passengersInput", n),
                                    u = $(".nightsContainer .packageSearch__NightsInput", n), a = !1, v = !1, y = !1,
                                    o = !1, p = !1, w = [], b, s, e, h, c, l;
                                f.off("change").on("change", function () {
                                    h()
                                });
                                u.off("change").on("change", function () {
                                    e()
                                });
                                $(document).on("click", ".nightItem:not(.flight-off)", function () {
                                    e()
                                });
                                i.off("change").on("change", function () {
                                    c()
                                });
                                t.off("change").on("change", function () {
                                    l()
                                });
                                r.off("change").on("change", function () {
                                    s()
                                });
                                f.off("focusout").on("focusout", function () {
                                    h()
                                });
                                u.off("focusout").on("focusout", function () {
                                    e()
                                });
                                i.off("focusout").on("focusout", function () {
                                    c()
                                });
                                t.off("focusout").on("focusout", function () {
                                    l()
                                });
                                r.off("focusout").on("focusout", function () {
                                    s()
                                });
                                b = function (n) {
                                    var t = [], i = $(".childAgeInput", n);
                                    return _.forEach(i, function (n) {
                                        t.push($(n).val())
                                    }), t
                                };
                                s = function () {
                                    var n = b();
                                    n.length > 0 ? (r.popover({
                                        toggle:    "popover",
                                        placement: "top",
                                        trigger:   "focus",
                                        content:   i18n_en.partials.searchTabs.packageSearch.passenger.popoverChildAge,
                                        template:  '<div class="passenger-validate-error-popover popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
                                    }), w = _.filter(n, function (n) {
                                        return n === "0"
                                    }), w.length > 0 ? (r.addClass("validateError"), r.popover("show"), o = !1) : (r.removeClass("validateError"), r.popover("dispose"), o = !0)) : (o = !0, r.hasClass("validateError") && (r.removeClass("validateError"), r.popover("dispose")))
                                };
                                s();
                                e = function () {
                                    _.isNil(u.val()) || u.val() === "" ? (u.addClass("validateError"), u.popover({
                                        toggle:    "popover",
                                        placement: "top",
                                        trigger:   "focus",
                                        content:   i18n_en.partials.searchTabs.packageSearch.errorMessages.nightPopup,
                                        template:  '<div class="night-validate-error-popover popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
                                    }), u.popover("show"), p = !1) : (u.removeClass("validateError"), u.popover("dispose"), p = !0)
                                };
                                e();
                                h = function () {
                                    _.isNil(f.val()) || f.val() === "" ? (f.addClass("validateError"), y = !1) : (f.removeClass("validateError"), f.popover("dispose"), y = !0)
                                };
                                h();
                                c = function () {
                                    _.isNil(i.val()) || i.val() === "" ? (i.addClass("validateError"), i.popover({
                                        toggle:    "popover",
                                        placement: "top",
                                        trigger:   "focus",
                                        content:   i18n_en.partials.searchTabs.packageSearch.errorMessages.departurePopup,
                                        template:  '<div class="departure-validate-error-popover popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
                                    }), i.popover("show"), v = !1) : (i.removeClass("validateError"), i.popover("dispose"), v = !0)
                                };
                                c();
                                l = function () {
                                    _.isNil(t.val()) || t.val() === "" ? (t.addClass("validateError"), t.popover({
                                        toggle:    "popover",
                                        placement: "top",
                                        trigger:   "focus",
                                        content:   i18n_en.partials.searchTabs.packageSearch.destination.popoverError,
                                        template:  '<div class="destination-validate-error-popover popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
                                    }), t.popover("show"), a = !1) : (t.removeClass("validateError"), t.popover("dispose"), a = !0)
                                };
                                l();
                                $(document).on("click", function (n) {
                                    $(n.target).hasClass("packageSearch__destinationInput") || !$(n.target).hasClass("packageSearch__departureInput") || $(n.target).hasClass("packageSearch__departureDateTimePickerInput") || $(n.target).hasClass("btnSubmitPackageSearch") || (t.popover("hide"), i.popover("hide"), f.popover("hide"))
                                });
                                return { a: a, b: v, c: y, d: o, e: p }
                            }
                        }, u = function (n) {
                            var y = function () {
                                    var o = $(".childAgeContainer", h), n = 18, r = 0, u;
                                    $(".childAgeUp", o).off("click").on("click", function () {
                                        var i = $(this).closest(".passengerContainerCol").find(".childAgeInput"),
                                            t = parseInt(i.val()), r = void 0;
                                        r = t >= n ? t : t + 1;
                                        i.val(r);
                                        u()
                                    });
                                    $(".childAgeInput", o).on("focusout", function () {
                                        f.checkinput($(this), r, n);
                                        u()
                                    });
                                    $(".childAgeInput", o).on("keypress keyup keydown", function () {
                                        var t = new RegExp("^[0-9]{0,9}$");
                                        t.test($(this).val()) || ($(this).val(""), $(this).val(0));
                                        $(this).val().length > n ? $(this).val(n) : $(this).val().length < r && $(this).val(r);
                                        f.checkinput($(this), r, n);
                                        u()
                                    });
                                    $(".childAgeDown", o).off("click").on("click", function () {
                                        var t = $(this).closest(".passengerContainerCol").find(".childAgeInput"),
                                            n = parseInt(t.val()), i = void 0;
                                        i = n <= r ? n : n - 1;
                                        t.val(i);
                                        u()
                                    });
                                    u = function () {
                                        var n, r, u;
                                        $(".childAge1", i).val() !== undefined && (n = $(".childAge1", i), e[0] = $(".childAgeInput", n).val());
                                        $(".childAge2", i).val() !== undefined && (r = $(".childAge2", i), e[1] = $(".childAgeInput", r).val());
                                        $(".childAge3", i).val() !== undefined && (u = $(".childAge3", i), e[2] = $(".childAgeInput", u).val());
                                        t.packageSearchModel(e, "childAge")
                                    }
                                }, s = $(".passengersContainer"), h = $(".packageSearch__passengerListContainer", s),
                                i = $(".passengerContainerRow", h), r = $(".childAgeContainer", i), c, u, l, a, o, v;
                            if (n <= 3) {
                                if (r.length < n) for (c = n - r.length, u = 1; u <= c; u++) l = t.modelpool.Guest.Children[r.length + u - 1] !== undefined ? t.modelpool.Guest.Children[r.length + u - 1] : 0, a = '\n            <div class="passengerContainerCol childAgeMain childAge' + (r.length + u) + ' col-6">\n              <label for="childAgeInput" class="childAgeLabel">' + i18n_en.partials.searchTabs.packageSearch.passenger.childShort + " " + (r.length + u) + '<\/label>\n              <div class="childAgeContainer input-group">\n                <span class="childAgeDown d-inline-block input-group-prepend"><i class="childAgeDownIcon material-icons">&#xe15b<\/i><\/span>\n                <input type="text" class="childAgeInput d-inline-block form-control" value="' + l + '">\n                <span class="childAgeUp d-inline-block input-group-prepend"><i class="childAgeUpIcon material-icons">&#xe145<\/i><\/span>\n              <\/div>\n            <\/div>\n            ', i.append(a), y(); else $(".childAgeMain:eq(" + n + "), .childAgeMain:gt(" + n + ")", i).remove(), r.length > n;
                                o = [];
                                v = $(".childAgeInput", s);
                                _.forEach(v, function (n) {
                                    o.push($(n).val())
                                });
                                t.packageSearchModel(o, "childAge")
                            }
                        }, f = {
                            checkinput: function (n, t, i) {
                                n.val() > i ? (n.val(i), u(i)) : n.val() < t && (n.val(t), u(t))
                            }
                        };
                        return {
                            init: function () {
                                moduleFactory.registerModule(i, o)
                            }
                        }
                    };
                    return {
                        getInstance: function () {
                            return t || (t = r()), t
                        }
                    }
                }(), i = t.getInstance();
                i.init()
            }).call(this)
        }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
    }, {}]
}, {}, [1]);
"use strict";
var $stage = "coral", $gdsUrl = "https://booking.coral.ru", $urlAppendix = "",
    $ascr = "c6cdb0f4ddb8840e8eceeda17cd77073";
(function () {
    function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (h = "function" == typeof require && require, !o && h) return h(f, !0);
                    if (e) return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                s = i[f] = { exports: {} };
                t[f][0].call(s.exports, function (n) {
                    var i = t[f][1][n];
                    return u(i || n)
                }, s, s.exports, n, t, i, r)
            }
            return i[f].exports
        }

        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++) u(r[f]);
        return u
    }

    return n
})()({
    1: [function () {
        (function (n) {
            (function () {
                var t = function () {
                    var h = "hotelsearchPartial", u = void 0, t = null, r = {}, f = "DD.MM.YYYY", e = " - ", i = {
                        toFrontDate:  function (n) {
                            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : f;
                            return moment(n).format(t)
                        }, toEndDate: function (n) {
                            return moment(n, f).format("YYYY-MM-DD")
                        }
                    }, o = function (n, t) {
                        return i.toFrontDate(n) + e + i.toFrontDate(t)
                    }, s = function () {
                        var t = "sess_hotelsearch", i = localStorage.getItem(t), n;
                        return i !== null ? (n = JSON.parse(i), moment(n.expired, "x").format("x") < moment().format("x") ? (localStorage.removeItem(t), null) : moment(n.data.BeginDate, "x").format("x") < moment().format("x") && moment(n.data.EndDate, "x").format("x") < moment().format("x") ? (localStorage.removeItem(t), null) : n) : null
                    }, c = function () {
                        var a = function (n) {
                            v.init(n);
                            u.init(n);
                            p.init(n);
                            w.init(n);
                            l.init(n);
                            y(n)
                        }, v = function () {
                            var t = function (t) {
                                $(t).on("click", ".search-dropdown", function () {
                                    var i = $(this).closest(".search-dropdown-wrapper");
                                    i.hasClass("active") ? (i.removeClass("active"), n.preventpagescroll.remove()) : ($(".search-dropdown-wrapper", t).removeClass("active"), i.addClass("active"), n.preventpagescroll.onlymobile());
                                    i.find(".search-dropdown-content").hasClass("no-covered-layout") || n.preventpagescroll.onlymobile()
                                });
                                $(document).on("click", function (i) {
                                    var u = $(".search-dropdown-wrapper", t), r = $(i.target);
                                    u.hasClass("active") && !r.hasClass("input-dropdown") && !r.closest(".search-dropdown").length > 0 && (r.hasClass("input-dropdown-content") || r.closest(".search-dropdown-content").length > 0 || u.removeClass("active"));
                                    r.hasClass("btnSelectPax") && (u.removeClass("active"), n.preventpagescroll.remove())
                                });
                                $(".hotel-pax-wrapper", t).on("click", ".mobileclose", function () {
                                    $(".btnSelectPax", t).trigger("click")
                                });
                                $(t).on("click", ".btn-search", function () {
                                    k(t)
                                })
                            };
                            return {
                                init: function (n) {
                                    return t(n)
                                }
                            }
                        }(), y = function (n) {
                            var i, e, f;
                            $(".container-tabItemWrap").data("searchparams").OnlyHotelQuery !== undefined && (t = $(".container-tabItemWrap").data("searchparams").OnlyHotelQuery);
                            i = moment().add(1, "days").format("YYYY-MM-DD");
                            e = s();
                            t === null && e !== null && (t = e.data, moment(t.BeginDate).isBefore(moment(i)) ? (t.BeginDate = moment(i), t.EndDate = moment(i).add(1, "days")) : (t.BeginDate = moment(t.BeginDate, "YYYY-MM-DD"), t.EndDate = moment(t.EndDate, "YYYY-MM-DD")));
                            f = null;
                            _.isNil(t) || t === "" ? (f = o(i, moment(i).add(1, "days")), u.paxUpdate(n)) : (f = o(t.BeginDate, t.EndDate), r.data = t.Destination, $(".location-destination", n).val(t.Destination.TitleRu), $(".pax-adult", n).val(t.Guest.Adults), $(".pax-child", n).val(t.Guest.Children.length), u.paxUpdate(n));
                            $(".datepicker-range", n).val(f);
                            t = null
                        }, p = function () {
                            var t = function (t) {
                                var r = $(".datepicker-range", t), v = r.closest(".datepicker-wrapper"),
                                    u = i18n_en.daterangepicker.locale, c;
                                u.format = f;
                                u.direction = "hotel_datepicker";
                                u.applyLabel = "Готово";
                                var a = function (n, t) {
                                        var r = s();
                                        return r !== null ? (r = r.data, r[t] ? i.toFrontDate(new Date(r[t])) : i.toFrontDate(n)) : i.toFrontDate(n)
                                    }, h = moment(new Date, u.format).add(1, "days"),
                                    y = moment(new Date(h), u.format).add(1, "days"), p = {
                                        parentEl: v,
                                        buttonClasses: "btn btn-primary",
                                        locale: u,
                                        maxSpan: { days: 30 },
                                        minDate: h,
                                        maxDate: !1,
                                        opens: "right",
                                        autoUpdateInput: !1,
                                        applyButtonClasses: "applyBtn btn btn-sm btn-default",
                                        cancelButtonClasses: "d-none",
                                        startDate: a(h, "BeginDate"),
                                        endDate: a(y, "EndDate")
                                    };
                                r.daterangepicker(p, function (n, t) {
                                    r.val(o(n, t))
                                });
                                r.on("apply.daterangepicker", function (t, i) {
                                    var f = i.startDate.format(u.format) + e + i.endDate.format(u.format);
                                    r.val(f);
                                    l.validateRequiredInput(r);
                                    n.preventpagescroll.remove()
                                });
                                r.off("dateclicked.daterangepicker").on("dateclicked.daterangepicker", function (n, t) {
                                    c(r, t)
                                });
                                r.on("show.daterangepicker", function (n, t) {
                                    c(r, t)
                                });
                                r.off("cancel.daterangepicker").on("cancel.daterangepicker", function () {
                                    n.preventpagescroll.remove()
                                });
                                c = function (t, i) {
                                    var r, u;
                                    if (n.preventpagescroll.onlymobile(), r = t.closest(".datepicker-wrapper"), $(".drp-dates", r).length < 1) {
                                        $(".daterangepicker", r).prepend('<div class="drp-dates" />');
                                        $(".daterangepicker", r).prepend('<div class="header"><div class="title">Даты проживания<\/div><div class="mobileclose"><i class="material-icons">&#xe5cd<\/i><\/div><\/div>');
                                        $(".daterangepicker", r).find(".mobileclose").on("click", function () {
                                            t.data("daterangepicker").hide();
                                            n.preventpagescroll.remove()
                                        });
                                        $(".drp-buttons", r).prepend('<div class="notAvaiableDays">' + i18n_en.partials.searchTabs.packageSearch.departureTimePicker.notavaiable + "<\/div><\/div>")
                                    }
                                    $(".drp-checkin", r).length < 1 && !_.isNil(i.startDate) && $(".drp-dates", r).append('<span class="drp-dates-title">' + i18n_en.partials.searchTabs.hotelSearch.dates.checkin + '<\/span><div class="drp-checkin"><i class="material-icons">&#xe916<\/i><span><\/span><\/div>');
                                    $(".drp-checkout", r).length < 1 && !_.isNil(i.endDate) && $(".drp-dates", r).append('<span class="drp-dates-title">' + i18n_en.partials.searchTabs.hotelSearch.dates.checkout + '<\/span><div class="drp-checkout""><i class="material-icons">&#xe916<\/i><span><\/span><\/div>');
                                    _.isEmpty(i.startDate) || $(".drp-checkin span", r).html(i.startDate.format("DD.MM.YYYY"));
                                    !_.isEmpty(i.endDate) && moment(i.endDate).isValid() ? ($(".drp-checkout span", r).html(i.endDate.format("DD.MM.YYYY")), $(".drp-checkout", r).show()) : $(".drp-checkout", r).hide();
                                    _.isNil(i.startDate) || _.isNil(i.endDate) ? ($(".drp-nights", r).html(""), $(".drp-nights", r).hide()) : ($(".drp-nights", r).length < 1 && $(".drp-dates", r).append('<span class="drp-dates-title">' + i18n_en.partials.searchTabs.hotelSearch.dates.nights + '<\/span><div class="drp-nights"><\/div>'), u = parseInt(moment(i.endDate, "DD.MM.YYYY").diff(moment(i.startDate, "DD.MM.YYYY"), "days", !0)), $(".drp-nights", r).html(u), $(".drp-nights", r).show())
                                };
                                $(t).on("click", ".datepicker-icon", function () {
                                    var n = $(this).closest(".input-with-icon").find("input"),
                                        t = $(this).closest(".input-with-icon").find(".daterangepicker");
                                    t.is(":visible") || n.focus()
                                })
                            };
                            return {
                                init: function (n) {
                                    return t(n)
                                }
                            }
                        }(), w = function () {
                            var t = { 5: "hotel", 4: "location_on", 1: "location_on" }, i = function (i) {
                                var h = "/v1/search/destinations", u = $(".location-input", ".hotelsearch"), c = 3,
                                    l = i18n_en.partials.searchTabs.hotelSearch.noResult, a = 300,
                                    v = u.hasClass("autocompleted"), s = $(".hotelSearch__destinationInput_mobile", i),
                                    f = !0, o, e;
                                $(i).on("focus", ".location-destination", function () {
                                    v || u.autocomplete({
                                        serviceUrl:                h,
                                        paramName:                 "keyword",
                                        params:                    { type: "hotel" },
                                        dataType:                  "json",
                                        deferRequestBy:            a,
                                        minChars:                  c,
                                        showNoSuggestionNotice:    !1,
                                        autoSelectFirst:           !0,
                                        triggerSelectOnValidInput: !1,
                                        noSuggestionNotice:        l,
                                        appendTo:                  s,
                                        beforeRender:              function () {
                                            u.removeAttr("dataid")
                                        },
                                        onSearchComplete:          function (n, i) {
                                            u.removeData("firstSuggestion");
                                            _.isEmpty(i) || (u.data("firstSuggestion", i[0]), i = $(".autocomplete-suggestion", s).each(function (n) {
                                                var r = i[n].data, u = t[r.ModelType];
                                                $(this).prepend('<i class="material-icons">' + u + "<\/i>");
                                                _.isNil(r.ParentTitleRu) || $(this).append('<span class="titleru">' + r.ParentTitleRu + "<\/span>")
                                            }))
                                        },
                                        transformResult:           function (n) {
                                            return {
                                                suggestions: $.map(n.Results, function (n) {
                                                    return { value: _.isNil(n.TitleRu) ? n.Title : n.TitleRu, data: n }
                                                })
                                            }
                                        },
                                        onSelect:                  function (t) {
                                            o(t, u);
                                            f ? ($(".hotelSearch__destinationInput_mobile").removeClass("show"), n.preventpagescroll.remove(), $(this).trigger("blur")) : ($(".hotelSearch__destinationInput_mobile").addClass("show"), n.preventpagescroll.onlymobile());
                                            f = !0
                                        },
                                        onHide:                    function () {
                                        }
                                    })
                                });
                                u.on("focus", function () {
                                    e($(this));
                                    $(".hotelSearch__destinationInput_mobile").addClass("show");
                                    n.preventpagescroll.onlymobile();
                                    f = !1
                                });
                                u.on("blur", function () {
                                    e($(this));
                                    f = !0
                                });
                                u.on("keyup", function () {
                                    _.isEmpty($(this).val()) && e($(this));
                                    $(".hotelSearch__destinationInput_mobile").hasClass("show") || $(this).attr("dataid") !== undefined || ($(".hotelSearch__destinationInput_mobile").addClass("show"), n.preventpagescroll.onlymobile())
                                });
                                $(".mobileclose", ".hotelSearch__destinationInput_mobile").on("click", function () {
                                    $(".location-destination", ".hotelSearch__destinationInput_mobile").autocomplete("hide");
                                    $(".hotelSearch__destinationInput_mobile").removeClass("show")
                                });
                                o = function (n, t) {
                                    r = n;
                                    t.val(n.value);
                                    t.attr("dataid", n.data.DataId)
                                };
                                e = function (n) {
                                    setTimeout(function () {
                                        var t = n.data("firstSuggestion");
                                        _.isEmpty(t) || _.isEmpty(n.val()) ? (u.val(""), n.removeAttr("dataid"), r = {}) : n.attr("dataid") !== undefined || (o(t, n), n.val(t.value))
                                    }, 1)
                                }
                            };
                            return {
                                init: function (n) {
                                    return i(n)
                                }
                            }
                        }(), u = function () {
                            var r = function (t) {
                                $(t).on("click", ".pax-spinner-up", function () {
                                    n($(this).closest(".pax-spinner"), "up");
                                    u.paxUpdate(t)
                                });
                                $(t).on("click", ".pax-spinner-down", function () {
                                    n($(this).closest(".pax-spinner"), "down");
                                    u.paxUpdate(t)
                                })
                            }, i = function (n, t) {
                                var i = "";
                                return t = parseInt(t), t > 0 && (n === "adult" ? i = t < 2 ? i18n_en.partials.searchTabs.hotelSearch.paxCulture.Adult : i18n_en.partials.searchTabs.hotelSearch.paxCulture.AdultPlural : n === "child" && (i = t < 2 ? i18n_en.partials.searchTabs.hotelSearch.paxCulture.Child : i18n_en.partials.searchTabs.hotelSearch.paxCulture.ChildPlural)), i
                            }, n = function (n, t) {
                                var i = {
                                    input: n.find(".pax-spinner-input"),
                                    min:   n.data("spinner-min") || 0,
                                    max:   n.data("spinner-max") || 9,
                                    val:   parseInt(n.find(".pax-spinner-input").val())
                                };
                                t === "up" ? i.val !== i.max && i.input.val(i.val + 1) : t === "down" && i.val !== i.min && i.input.val(i.val - 1)
                            };
                            return {
                                init:         function (n) {
                                    return r(n)
                                }, paxText:   function (n, t) {
                                    return i(n, t)
                                }, spinUp:    function (t) {
                                    return n(t, "up")
                                }, spinDown:  function (t) {
                                    return n(t, "down")
                                }, paxUpdate: function (n) {
                                    var r = {
                                        input:            $(".pax-input", n),
                                        adult:            parseInt($(".pax-adult", n).val()),
                                        adultText:        "",
                                        child:            parseInt($(".pax-child", n).val()),
                                        childText:        "",
                                        childAgesWrapper: $(".pax-child-ages-wrapper", n),
                                        childAges:        $(".pax-child-ages", n),
                                        childAge:         {
                                            item:   $('<div class="pax-child-age w-50 " />'),
                                            select: $('<select class="pax-child-age-select required" data-error-message="' + i18n_en.partials.searchTabs.hotelSearch.paxCulture.ChildAgeError + '" />'),
                                            maxAge: $(".pax-child", n).data("max-age") || 18,
                                            count:  $(".pax-child-age", n).length
                                        }
                                    }, u, s, h, f, o, c, l, e, a, v;
                                    if (r.adultText = r.adult > 0 ? r.adult + " " + i("adult", r.adult) : "", r.childText = r.child > 0 ? ", " + r.child + i("child", r.child) : "", r.input.val(r.adultText + r.childText), u = "", r.adult <= 2 && r.child <= 2) {
                                        for (s = 0; s < r.adult; s++) u += '<i class="icon-person"><\/i>';
                                        for (h = 0; h < r.child; h++) u += '<i class="icon-person child"><\/i>'
                                    } else u += "<abbr>" + r.adult + '<\/abbr><i class="icon-person"><\/i>', r.child > 0 && (u += "<abbr>" + r.child + '<\/abbr><i class="icon-person child"><\/i>');
                                    for ($(r.input).next("span.iconPresentation").html(u), f = 0; f <= r.childAge.maxAge; f++) r.childAge.select.append('<option value="' + (f === 0 ? "" : f) + '">' + f + "<\/option>");
                                    if (r.childAge.item.append(r.childAge.select.clone()), o = r.child - r.childAge.count, t !== null) {
                                        if (c = t.Guest.Children, l = c.length, l > 0) for (e = 0; e < l; e++) r.childAges.append(r.childAge.item.clone()), r.childAges.find(".pax-child-age").last().prepend('<label class="w-100 d-block">' + i18n_en.partials.searchTabs.hotelSearch.paxCulture.ChildShort + " " + (e + 1) + "<\/label>"), r.childAges.find("select:eq(" + e + ")").val(c[e])
                                    } else if (o > 0) for (a = 0; a < o; a++) r.childAges.append(r.childAge.item), r.childAges.find(".pax-child-age").last().prepend('<label class="w-100 d-block">' + i18n_en.partials.searchTabs.hotelSearch.paxCulture.ChildShort + " " + (r.childAges.find(".pax-child-age").last().index() + 1) + "<\/label>"); else for (v = 0; v < Math.abs(o); v++) r.childAges.find(".pax-child-age").last().remove();
                                    r.child > 0 ? r.childAgesWrapper.show() : r.childAgesWrapper.hide()
                                }
                            }
                        }(), b = function (n) {
                            var t = {
                                child:          parseInt($(".pax-adult", n).val()),
                                childAgeSelect: $(".pax-child-age-select", n),
                                childAges:      []
                            };
                            t.child > 0 && _.forEach(t.childAgeSelect, function (n) {
                                t.childAges.push(parseInt($(n).val()))
                            });
                            var u = $(".datepicker-range").val().split(e), f = u[0], o = u[1];
                            return {
                                Destination: r.data,
                                BeginDate:   i.toEndDate(f),
                                EndDate:     i.toEndDate(o),
                                Guest:       { Adults: parseInt($(".pax-adult", n).val()), Children: t.childAges }
                            }
                        }, k = function (t) {
                            var i, u, r, f;
                            l.validateRequiredModel(t) && (n.travelloader.show(), i = b(t), i !== !1 && (u = moment(new Date).add(30, "days").format("x"), localStorage.setItem("sess_hotelsearch", JSON.stringify({
                                expired: u,
                                data:    i
                            })), r = i.Destination.ModelType, r === 5 || r === "hotel" ? (f = window.open(), $.ajax({
                                type:     "POST",
                                url:      "/v1/onlyhotel/search",
                                dataType: "JSON",
                                data:     i,
                                success:  function (t) {
                                    f.location.href = t;
                                    n.travelloader.hide()
                                },
                                error:    function (t) {
                                    console.log(t);
                                    n.travelloader.hide()
                                }
                            })) : $.ajax({
                                type:     "POST",
                                url:      "/v1/onlyhotel/search",
                                dataType: "JSON",
                                data:     i,
                                success:  function (n) {
                                    window.location.href = n
                                },
                                error:    function (t) {
                                    console.log(t);
                                    n.travelloader.hide()
                                }
                            })))
                        }, l = function () {
                            var t = function (n) {
                                $(n).on("focus", ".required", function () {
                                    c.remove($(this))
                                })
                            }, n = function (n) {
                                var t = !0,
                                    i = n.data("error-message") || i18n_en.partials.searchTabs.hotelSearch.requiredErrorMessage;
                                return _.isEmpty(n.val()) ? (t = !1, n.closest(".search-dropdown-wrapper").length > 0 ? setTimeout(function () {
                                    n.closest(".search-dropdown-wrapper").addClass("active");
                                    c.add(n, i)
                                }, 200) : c.add(n, i)) : c.remove(n), t
                            }, i = function (t) {
                                var i = !0;
                                return $(".required", t).each(function () {
                                    n($(this)) || (i = !1)
                                }), i
                            };
                            return {
                                init:                     function (n) {
                                    return t(n)
                                }, validateRequiredInput: function (t) {
                                    return n(t)
                                }, validateRequiredModel: function (n) {
                                    return i(n)
                                }
                            }
                        }(), c = function () {
                            var n = function (n, t) {
                                n.addClass("validate-error");
                                _.isEmpty(t) || (n.popover({
                                    toggle:    "popover",
                                    placement: "top",
                                    trigger:   "focus",
                                    content:   t,
                                    container: n.closest("div"),
                                    template:  '<div class="passenger-validate-error-popover popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
                                }), n.popover("show"))
                            }, t = function (n) {
                                n.removeClass("validate-error");
                                n.closest("div").find(".popover").remove()
                            };
                            return {
                                add:       function (t, i) {
                                    return n(t, i)
                                }, remove: function (n) {
                                    return t(n)
                                }
                            }
                        }();
                        return {
                            init: function () {
                                moduleFactory.registerModule(h, a)
                            }
                        }
                    };
                    return {
                        getInstance: function () {
                            return u || (u = c()), u
                        }
                    }
                }(), i = t.getInstance();
                i.init()
            }).call(this)
        }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
    }, {}]
}, {}, [1]);
"use strict";
var $stage = "coral", $gdsUrl = "https://booking.coral.ru", $urlAppendix = "",
    $ascr = "c6cdb0f4ddb8840e8eceeda17cd77073";
(function () {
    function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (h = "function" == typeof require && require, !o && h) return h(f, !0);
                    if (e) return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                s = i[f] = { exports: {} };
                t[f][0].call(s.exports, function (n) {
                    var i = t[f][1][n];
                    return u(i || n)
                }, s, s.exports, n, t, i, r)
            }
            return i[f].exports
        }

        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++) u(r[f]);
        return u
    }

    return n
})()({
    1: [function () {
        (function (n) {
            (function () {
                var t = function () {
                    var r = "flightsearchPartial", i = void 0, t = i18n_en.partials.searchTabs.flightSearch.paxCulture,
                        u = function () {
                            var o = function (n) {
                                s.init(n);
                                h.init(n);
                                c.init(n);
                                l.init(n);
                                e.init(n);
                                i.init(n);
                                a(n)
                            }, s = function () {
                                var t = function (t) {
                                    $(t).on("click", ".search-dropdown", function () {
                                        var i = $(this).closest(".search-dropdown-wrapper");
                                        i.hasClass("active") ? i.removeClass("active") : ($(".search-dropdown-wrapper", t).removeClass("active"), i.addClass("active"));
                                        i.find(".search-dropdown-content").hasClass("no-covered-layout") || n.preventpagescroll.onlymobile()
                                    });
                                    $(document).on("click", function (i) {
                                        var u = $(".search-dropdown-wrapper", t), r = $(i.target);
                                        u.hasClass("active") && !r.hasClass("input-dropdown") && !r.closest(".search-dropdown").length > 0 && (r.hasClass("input-dropdown-content") || r.closest(".search-dropdown-content").length > 0 || u.removeClass("active"), r.hasClass("btnSelectPax") && (u.removeClass("active"), n.preventpagescroll.remove()))
                                    });
                                    $(".flight-pax-wrapper", t).on("click", ".mobileclose", function () {
                                        $(".btnSelectPax", t).trigger("click")
                                    });
                                    $(t).on("click", ".search-option-class li", function () {
                                        $(this).siblings().removeClass("selected");
                                        $(this).addClass("selected");
                                        $(".search-option-class-text", t).text($(this).text())
                                    });
                                    $(t).on("change", "[name=flight-type]", function () {
                                        var n = $(this).val(), i, r, u, f;
                                        $(".flightsearch").attr("data-flight-type", n);
                                        n === "MultiDestination" ? (i = $(".flight-not-multi .flight-options-wrapper > div").detach(), i.appendTo($(".flight-multi .flight-options-wrapper")), r = $(".flight-not-multi .flight-pax-wrapper > div").detach(), r.appendTo($(".flight-multi .flight-pax-wrapper")), $(".flight-multi-item", t).length < 2 && $(".btn-add-flight").trigger("click")) : (u = $(".flight-multi .flight-options-wrapper > div").detach(), u.appendTo($(".flight-not-multi .flight-options-wrapper")), f = $(".flight-multi .flight-pax-wrapper > div").detach(), f.appendTo($(".flight-not-multi .flight-pax-wrapper")))
                                    });
                                    $(t).on("click", ".btn-flight-add-roundtrip", function () {
                                        $("[name=flight-type][value=RoundTrip]", t).trigger("click");
                                        $(".datepicker-roundtrip-departure", t).trigger("focus")
                                    });
                                    var i = $(".flight-multi-item").first()[0].outerHTML;
                                    $(t).on("click", ".btn-add-flight", function () {
                                        if ($(".flight-multi-item", t).length < 5) {
                                            var n = $(this).closest(".flight-multi").find(".flight-multi-item").last(),
                                                r = n.find(".datepicker-multi-departure").val();
                                            n.after(i);
                                            $(".flight-multi").find(".flight-multi-item").last().find(".datepicker-multi-departure").val(moment(r, "DD.MM.YYYY").add(1, "days").format("DD.MM.YYYY"));
                                            $(".flight-multi-title-num").each(function () {
                                                $(this).text($(this).closest(".flight-multi-item").index() + 1)
                                            })
                                        }
                                    });
                                    $(t).on("click", ".btn-remove-flight", function () {
                                        $(".flight-multi-item", t).length > 2 && $(this).closest(".flight-multi-item").remove()
                                    });
                                    $(t).on("click", ".btn-search", function () {
                                        p(t)
                                    })
                                };
                                return {
                                    init: function (n) {
                                        return t(n)
                                    }
                                }
                            }(), h = function () {
                                var t = function (t) {
                                    $(".datepicker-oneway-departure", t).val(moment(new Date).format("DD.MM.YYYY"));
                                    $(".datepicker-roundtrip-departure", t).val(moment(new Date).format("DD.MM.YYYY"));
                                    $(".datepicker-roundtrip-return", t).val(moment(new Date).format("DD.MM.YYYY"));
                                    $(".datepicker-multi-departure", t).first().val(moment(new Date).format("DD.MM.YYYY"));
                                    $(t).on("focus", ".datepicker-oneway-departure", function () {
                                        var u = $(this), e = u.val() || !1, o = u.closest(".datepicker-wrapper"), f;
                                        if ($(".flight_datepicker_oneway").length > 0) $(".flight_datepicker_oneway").show(); else {
                                            f = i18n_en.daterangepicker.locale;
                                            f.direction = "flight_datepicker_oneway oneway";
                                            f.applyLabel = i18n_en.daterangepicker.locale.applyLabel;
                                            u.daterangepicker({
                                                parentEl:           o,
                                                buttonClasses:      "btn btn-primary",
                                                minDate:            new Date,
                                                maxDate:            !1,
                                                autoUpdateInput:    !0,
                                                applyButtonClasses: "applyBtn btn btn-sm btn-default",
                                                singleDatePicker:   !0,
                                                opens:              "right",
                                                startDate:          e,
                                                linkedCalendars:    !1,
                                                endDate:            !1,
                                                locale:             f
                                            }, function (n, r) {
                                                i.validateRequiredInput(u);
                                                $(".datepicker-roundtrip-departure", t).val(n.format("DD.MM.YYYY"));
                                                moment(r).diff(moment($(".datepicker-roundtrip-return", t).val(), "DD.MM.YYYY"), "days", !0) > 0 && $(".datepicker-roundtrip-return", t).val(r.format("DD.MM.YYYY"));
                                                $(".flight_datepicker_roundtrip").length > 0 && ($(".datepicker-roundtrip-departure", t).data("daterangepicker").setStartDate(n), moment(r).diff(moment($(".datepicker-roundtrip-return", t).val(), "DD.MM.YYYY"), "days", !0) > 0 && $(".datepicker-roundtrip-departure", t).data("daterangepicker").setEndDate(r))
                                            });
                                            u.on("apply.daterangepicker", function () {
                                                n.preventpagescroll.remove()
                                            });
                                            u.off("cancel.daterangepicker").on("cancel.daterangepicker", function () {
                                                n.preventpagescroll.remove()
                                            });
                                            u.off("dateclicked.daterangepicker").on("dateclicked.daterangepicker", function (n, t) {
                                                r(u, t)
                                            });
                                            u.on("show.daterangepicker", function (n, t) {
                                                r(u, t)
                                            })
                                        }
                                    });
                                    $(t).on("focus", ".datepicker-roundtrip-departure", function () {
                                        var r = $(this), s = $(".datepicker-roundtrip-return", t),
                                            h = r.closest(".datepicker-wrapper"), e, f, o;
                                        if ($(".flight_datepicker_roundtrip").length > 0) $(".flight_datepicker_roundtrip").show(), h.find(".drp-departure span").html($(".datepicker-roundtrip-departure", t).val()), h.find(".drp-return span").html($(".datepicker-roundtrip-return", t).val()); else {
                                            e = i18n_en.daterangepicker.locale;
                                            e.direction = "flight_datepicker_roundtrip roundtrip";
                                            e.applyLabel = i18n_en.daterangepicker.locale.applyLabel;
                                            f = r.val() || !1;
                                            o = void 0;
                                            moment(s.val(), "DD.MM.YYYY").diff(moment(f, "DD.MM.YYYY"), "days", !0) > 0 ? o = s.val() : (o = f, s.val(f));
                                            r.daterangepicker({
                                                parentEl:           h,
                                                buttonClasses:      "btn btn-primary",
                                                minDate:            new Date,
                                                maxDate:            !1,
                                                opens:              "right",
                                                autoUpdateInput:    !1,
                                                applyButtonClasses: "applyBtn btn btn-sm btn-default",
                                                startDate:          f,
                                                endDate:            o,
                                                locale:             e
                                            }, function (n, u) {
                                                $(".datepicker-roundtrip-departure", t).val(n.format("DD.MM.YYYY"));
                                                $(".datepicker-roundtrip-return", t).val(u.format("DD.MM.YYYY"));
                                                $(".datepicker-oneway-departure", t).val(n.format("DD.MM.YYYY"));
                                                $(".flight_datepicker_oneway").length > 0 && ($(".datepicker-oneway-departure", t).data("daterangepicker").setStartDate(n), $(".datepicker-oneway-departure", t).data("daterangepicker").setEndDate(n));
                                                i.validateRequiredInput(r)
                                            });
                                            r.off("dateclicked.daterangepicker").on("dateclicked.daterangepicker", function (n, t) {
                                                u(r, t)
                                            });
                                            r.on("apply.daterangepicker", function () {
                                                n.preventpagescroll.remove()
                                            });
                                            r.off("cancel.daterangepicker").on("cancel.daterangepicker", function () {
                                                n.preventpagescroll.remove()
                                            });
                                            r.on("show.daterangepicker", function (n, i) {
                                                u(r, i);
                                                $(".datepicker-roundtrip-departure", t).data("daterangepicker").setStartDate($(".datepicker-roundtrip-departure", t).val());
                                                $(".datepicker-roundtrip-departure", t).data("daterangepicker").setEndDate($(".datepicker-roundtrip-return", t).val())
                                            })
                                        }
                                    });
                                    var u = function (t, i) {
                                        n.preventpagescroll.onlymobile();
                                        var r = t.closest(".datepicker-wrapper");
                                        if ($(".drp-dates", r).length < 1) {
                                            $(".daterangepicker", r).prepend('<div class="drp-dates" />');
                                            $(".daterangepicker", r).prepend('<div class="header"><div class="title">Дата отправления<\/div><div class="mobileclose"><i class="material-icons">&#xe5cd<\/i><\/div><\/div>');
                                            $(".daterangepicker", r).find(".mobileclose").on("click", function () {
                                                t.data("daterangepicker").hide();
                                                n.preventpagescroll.remove()
                                            })
                                        }
                                        $(".drp-departure", r).length < 1 && !_.isNil(i.startDate) && $(".drp-dates", r).append('<span class="drp-dates-title">' + i18n_en.partials.searchTabs.flightSearch.dates.departure + '<\/span><div class="drp-departure"><i class="material-icons">&#xe905<\/i><span><\/span><\/div>');
                                        $(".drp-return", r).length < 1 && !_.isNil(i.endDate) && $(".drp-dates", r).append('<span class="drp-dates-title">' + i18n_en.partials.searchTabs.flightSearch.dates.return + '<\/span><div class="drp-return""><i class="material-icons">&#xe904<\/i><span><\/span><\/div>');
                                        _.isEmpty(i.startDate) || $(".drp-departure span", r).html(i.startDate.format("DD.MM.YYYY"));
                                        !_.isEmpty(i.endDate) && moment(i.endDate).isValid() ? ($(".drp-return span", r).html(i.endDate.format("DD.MM.YYYY")), $(".drp-return", r).show()) : $(".drp-return", r).hide()
                                    }, r = function (t) {
                                        n.preventpagescroll.onlymobile();
                                        var i = t.closest(".datepicker-wrapper");
                                        if ($(".drp-dates", i).length < 1) {
                                            $(".daterangepicker", i).prepend('<div class="header"><div class="title">Дата отправления<\/div><div class="mobileclose"><i class="material-icons">&#xe5cd<\/i><\/div><\/div>');
                                            $(".daterangepicker", i).find(".mobileclose").on("click", function () {
                                                t.data("daterangepicker").hide();
                                                n.preventpagescroll.remove()
                                            })
                                        }
                                    };
                                    $(t).on("focus", ".datepicker-roundtrip-return", function () {
                                        var n = $(".datepicker-roundtrip-departure", t).closest(".input-with-icon").find(".daterangepicker");
                                        n.is(":visible") || $(".datepicker-roundtrip-departure", t).focus()
                                    });
                                    $(t).on("focus", ".datepicker-multi-departure", function () {
                                        var t = $(this), s = t.closest(".datepicker-wrapper"),
                                            h = t.closest(".flight-multi-item").index(),
                                            u = "flight_datepicker_multi_" + h, e = new Date,
                                            o = t.closest(".flight-multi-item").prev(".flight-multi-item"), f;
                                        if (o.length && (e = moment(o.find(".datepicker-multi-departure").val(), "DD.MM.YYYY").toDate()), $("." + u).length > 0) $("." + u).show(); else {
                                            f = i18n_en.daterangepicker.locale;
                                            u += " oneway";
                                            f.direction = u;
                                            f.applyLabel = i18n_en.daterangepicker.locale.applyLabel;
                                            t.daterangepicker({
                                                parentEl:           s,
                                                buttonClasses:      "btn btn-primary",
                                                minDate:            e,
                                                maxDate:            !1,
                                                autoUpdateInput:    !0,
                                                applyButtonClasses: "applyBtn btn btn-sm btn-default",
                                                singleDatePicker:   !0,
                                                linkedCalendars:    !1,
                                                opens:              "left",
                                                startDate:          !1,
                                                endDate:            !1,
                                                locale:             f
                                            }, function (n) {
                                                var r = t.closest(".flight-multi-item").nextAll(".flight-multi-item");
                                                r.length && r.each(function () {
                                                    var t = $(this).find(".datepicker-multi-departure"),
                                                        i = moment(t.val(), "DD.MM.YYYY").toDate();
                                                    t.closest(".datepicker-wrapper").find(".daterangepicker").length > 0 && (moment(n, "DD.MM.YYYY").diff(moment(i, "DD.MM.YYYY"), "days", !0) > 0 && (t.data("daterangepicker").setStartDate(n), t.data("daterangepicker").setEndDate("")), t.data("daterangepicker").setMinDate(n))
                                                });
                                                i.validateRequiredInput(t)
                                            });
                                            t.on("apply.daterangepicker", function () {
                                                n.preventpagescroll.remove()
                                            });
                                            t.off("cancel.daterangepicker").on("cancel.daterangepicker", function () {
                                                n.preventpagescroll.remove()
                                            });
                                            t.off("dateclicked.daterangepicker").on("dateclicked.daterangepicker", function (n, i) {
                                                r(t, i)
                                            });
                                            t.on("show.daterangepicker", function (n, i) {
                                                r(t, i)
                                            })
                                        }
                                    });
                                    $(t).on("click", ".datepicker-icon", function () {
                                        var n = $(this).closest(".input-with-icon").find("input"),
                                            t = $(this).closest(".input-with-icon").find(".daterangepicker");
                                        t.is(":visible") || n.focus()
                                    })
                                };
                                return {
                                    init: function (n) {
                                        return t(n)
                                    }
                                }
                            }(), c = function () {
                                var t = function (t) {
                                    var r = !0, f, u;
                                    $(t).on("focus", ".location-input", function () {
                                        var t = $(this), e = t.hasClass("autocompleted"),
                                            i = $(this).closest(".location-mobile-layout"),
                                            u = t.closest(".location-inputs").find(".location-input").not(this);
                                        e || t.autocomplete({
                                            serviceUrl:                $gdsUrl + "/api/Flight/FilterAirportsElastic",
                                            paramName:                 "term",
                                            dataType:                  "json",
                                            minChars:                  3,
                                            showNoSuggestionNotice:    !1,
                                            noSuggestionNotice:        i18n_en.partials.searchTabs.flightSearch.noResult,
                                            triggerSelectOnValidInput: !1,
                                            appendTo:                  i,
                                            autoSelectFirst:           !0,
                                            beforeRender:              function () {
                                                t.removeAttr("data-code");
                                                t.removeAttr("data-city-code");
                                                t.removeAttr("data-type");
                                                t.removeAttr("data-value")
                                            },
                                            onSearchComplete:          function (n, r) {
                                                if (t.removeData("first-suggestion"), !_.isEmpty(r)) {
                                                    var f = !1;
                                                    r = i.find(".autocomplete-suggestion").each(function (n) {
                                                        var i = $(this), e = r[n].data, o = "location_on";
                                                        u.data("city-code") === e.CityCode ? i.hide() : f || (i.show(), t.data("first-suggestion", r[n]), f = !0);
                                                        e.Type === 0 && (o = "&#xe905", i.addClass("airport"));
                                                        i.prepend('<span class="material-icons">' + o + "<\/span>");
                                                        i.append('<span class="autocomplete-flight-code">' + e.Code + "<\/span>");
                                                        _.isNil(e.CityName) || _.isNil(e.CountryCode) || i.append('<span class="autocomplete-flight-subtitle">' + e.CountryCode + "<\/span>")
                                                    })
                                                }
                                            },
                                            transformResult:           function (n) {
                                                return {
                                                    suggestions: $.map(n, function (n) {
                                                        if (!_.isNil(n.label) && u.data("city-code") !== n.CityCode) {
                                                            var t = n.label;
                                                            return { value: t, data: n }
                                                        }
                                                    })
                                                }
                                            },
                                            onSelect:                  function (i) {
                                                f(i, t);
                                                r ? ($(this).closest(".location-mobile-layout").removeClass("show"), n.preventpagescroll.remove(), $(this).trigger("blur")) : ($(this).closest(".location-mobile-layout").addClass("show"), n.preventpagescroll.onlymobile());
                                                r = !0
                                            },
                                            onHide:                    function () {
                                            }
                                        })
                                    });
                                    $(t).on("focus", ".location-input", function () {
                                        u($(this));
                                        $(this).closest(".location-mobile-layout").addClass("show");
                                        n.preventpagescroll.onlymobile();
                                        r = !1
                                    });
                                    f = function (n, t) {
                                        var r = t.closest(".location-input-wrapper"), i;
                                        t.data("code", n.data.Code);
                                        t.data("city-code", n.data.CityCode);
                                        t.data("type", n.data.Type);
                                        t.data("value", n.value);
                                        i = r.find(".autocomplete-selected-code");
                                        i.length > 0 ? i.html(n.data.Code) : r.append('<span class="autocomplete-selected-code">' + n.data.Code + "<\/span>")
                                    };
                                    u = function (n) {
                                        setTimeout(function () {
                                            var t = n.data("first-suggestion");
                                            _.isEmpty(t) || _.isEmpty(n.val()) ? (n.val(""), n.removeData("code"), n.removeData("city-code"), n.removeData("type"), n.closest(".location-input-wrapper").find(".autocomplete-selected-code").remove()) : n.data("code") !== undefined || (f(t, n), n.val(t.value))
                                        }, 100)
                                    };
                                    $(t).on("blur", ".location-input", function () {
                                        u($(this));
                                        r = !0
                                    });
                                    $(t).on("keyup", ".location-input", function () {
                                        _.isEmpty($(this).val()) && u($(this));
                                        $(this).closest(".location-mobile-layout").hasClass("show") || $(this).data("code") !== undefined || ($(".hotelSearch__destinationInput_mobile").addClass("show"), n.preventpagescroll.onlymobile())
                                    });
                                    $(t).on("click", ".location-reverse", function () {
                                        var t = $(this).closest(".location-inputs").find(".location-departure"),
                                            r = $(this).closest(".location-inputs").find(".location-arrival"), n = {
                                                departure: {
                                                    val:              t.val() || "",
                                                    code:             t.data("code") || "",
                                                    cityCode:         t.data("city-code") || "",
                                                    type:             t.data("type") || "",
                                                    selectedCodeHTML: t.closest(".location-input-wrapper").find(".autocomplete-selected-code") || null
                                                },
                                                arrival: {
                                                    val:              r.val() || "",
                                                    code:             r.data("code") || "",
                                                    cityCode:         r.data("city-code") || "",
                                                    type:             r.data("type") || "",
                                                    selectedCodeHTML: r.closest(".location-input-wrapper").find(".autocomplete-selected-code") || null
                                                }
                                            };
                                        t.val(n.arrival.val);
                                        t.data("code", n.arrival.code);
                                        t.data("city-code", n.arrival.cityCode);
                                        t.data("type", n.arrival.type);
                                        r.val(n.departure.val);
                                        r.data("code", n.departure.code);
                                        r.data("city-code", n.departure.cityCode);
                                        r.data("type", n.departure.type);
                                        _.isEmpty(n.departure.selectedCodeHTML) ? _.isEmpty(n.arrival.code) || t.closest(".location-input-wrapper").append('<span class="autocomplete-selected-code">' + n.arrival.code + "<\/span>") : _.isEmpty(n.arrival.code) ? n.departure.selectedCodeHTML.remove() : n.departure.selectedCodeHTML.html(n.arrival.code);
                                        _.isEmpty(n.arrival.selectedCodeHTML) ? _.isEmpty(n.departure.code) || r.closest(".location-input-wrapper").append('<span class="autocomplete-selected-code">' + n.departure.code + "<\/span>") : _.isEmpty(n.departure.code) ? n.arrival.selectedCodeHTML.remove() : n.arrival.selectedCodeHTML.html(n.departure.code);
                                        i.validateRequiredInput(t);
                                        i.validateRequiredInput(r)
                                    });
                                    $(".mobileclose", ".location-mobile-layout").on("click", function () {
                                        $(this).closest(".location-mobile-layout").find(".location-input").autocomplete("hide");
                                        $(this).closest(".location-mobile-layout").removeClass("show");
                                        n.preventpagescroll.remove()
                                    })
                                };
                                return {
                                    init: function (n) {
                                        return t(n)
                                    }
                                }
                            }(), l = function () {
                                var n = function (n) {
                                    var r = [], f = $(".airline-filter-selected", n), t = $(".airline-filter-text", n),
                                        i = [], u = function (r) {
                                            var e = $(".airline-filter", n);
                                            if (i.length < 3) {
                                                var u = $('<div class="airline-item" data-code="' + r.data.Code + '" />'),
                                                    o = '<img src="https://newbiletcdn.coral.ru/Airlines/thumbs/' + r.data.Code.toLowerCase() + '.png" />';
                                                u.html(o + r.value + '<i class="material-icons airline-item-remove">&#xe14c<\/i>');
                                                f.append(u);
                                                i.push(r.data.Code);
                                                t.find(".filter-badge[data-code=" + r.data.Code + "]").length < 1 && t.append('<span class="filter-badge" data-code="' + r.data.Code + '">' + r.data.Code + "<\/span>");
                                                t.closest(".search-dropdown").removeClass("no-text");
                                                i.length === 3 && e.prop("disabled", !0)
                                            }
                                        };
                                    $(n).on("click", ".airline-filer-dropdown", function () {
                                        var n = $(this).closest(".search-dropdown-wrapper").find(".search-dropdown-content");
                                        _.isEmpty(r) && (n.addClass("loading"), $.ajax({
                                            url:      $gdsUrl + "/api/Flight/AllAirlinesV2",
                                            dataType: "json",
                                            async:    !1,
                                            success:  function (t) {
                                                r = $.map(t, function (n) {
                                                    var t, i;
                                                    if (!_.isNil(n.Code) && !_.isNil(n.Name)) return t = {
                                                        value: n.Code + " - " + n.Name,
                                                        data: {
                                                            Code: n.Code,
                                                            Name: n.Name
                                                        }
                                                    }, localStorage.getItem("FlightSearchModel") && (i = JSON.parse(localStorage.getItem("FlightSearchModel")), _.includes(i.AirlineCodes, n.Code) && u(t)), t
                                                });
                                                setTimeout(function () {
                                                    n.removeClass("loading")
                                                }, 1e3)
                                            }
                                        }))
                                    });
                                    $(n).on("focus", ".airline-filter", function () {
                                        var n = $(this), f = n.hasClass("autocompleted"),
                                            t = n.closest(".airline-filter-wrapper");
                                        f || n.autocomplete({
                                            lookup:                    r,
                                            minChars:                  2,
                                            showNoSuggestionNotice:    !1,
                                            noSuggestionNotice:        i18n_en.partials.searchTabs.flightSearch.noResult,
                                            triggerSelectOnValidInput: !1,
                                            appendTo:                  t,
                                            autoSelectFirst:           !0,
                                            beforeRender:              function () {
                                                t.find(".autocomplete-suggestions").eq(1).remove()
                                            },
                                            onSearchComplete:          function (n, r) {
                                                r = t.find(".autocomplete-suggestion").each(function (n) {
                                                    var t = $(this), u = r[n].data, f = "";
                                                    f += '<img src="https://newbiletcdn.coral.ru/Airlines/thumbs/' + u.Code.toLowerCase() + '.png" />';
                                                    t.prepend(f);
                                                    _.includes(i, u.Code) ? t.hide() : t.show()
                                                })
                                            },
                                            transformResult:           function (n) {
                                                return {
                                                    suggestions: $.map(n, function (n) {
                                                        if (!_.isNil(n.Name) && !_.isNil(n.Code)) return {
                                                            value: n.value,
                                                            data:  n
                                                        }
                                                    })
                                                }
                                            },
                                            onSelect:                  function (t) {
                                                u(t);
                                                n.val("")
                                            }
                                        })
                                    });
                                    $(n).on("click", ".airline-item-remove", function () {
                                        var f = $(this), e = $(".airline-filter", n), r = f.closest(".airline-item"),
                                            u = r.data("code");
                                        _.remove(i, function (n) {
                                            return n === u
                                        });
                                        r.remove();
                                        t.find(".filter-badge[data-code=" + u + "]").remove();
                                        t.find(".filter-badge").length < 1 && t.closest(".search-dropdown").addClass("no-text");
                                        e.prop("disabled", !1)
                                    })
                                };
                                return {
                                    init: function (t) {
                                        return n(t)
                                    }
                                }
                            }(), e = function () {
                                var u = function (n) {
                                    $(n).on("click", ".pax-spinner-up", function () {
                                        i($(this).closest(".pax-spinner"), "up");
                                        r(n)
                                    });
                                    $(n).on("click", ".pax-spinner-down", function () {
                                        i($(this).closest(".pax-spinner"), "down");
                                        r(n)
                                    })
                                }, i = function (n, t) {
                                    var i = {
                                        input: n.find(".pax-spinner-input"),
                                        min:   n.data("spinner-min") || 0,
                                        max:   n.data("spinner-max") || 9,
                                        val:   parseInt(n.find(".pax-spinner-input").val())
                                    };
                                    t === "up" ? i.val !== i.max && i.input.val(i.val + 1) : t === "down" && i.val !== i.min && i.input.val(i.val - 1)
                                }, n = function (n, i) {
                                    var r = "";
                                    return i = parseInt(i), i > 0 && (n === "adult" ? r = i < 2 ? t.Adult : t.AdultPlural : n === "child" ? r = i < 2 ? t.ChildShort : t.ChildPlural : n === "infant" ? r = i === 1 ? t.Infant : i === 2 || i === 3 || i === 4 ? t.InfantPlural : i === 5 ? t.Infant5 : i === 6 ? t.Infant6 : i === 7 ? t.Infant7 : i === 8 ? t.Infant8 : i === 9 ? t.Infant9 : t.Infant : n === "infantwithseat" && (r = i === 1 ? t.InfantSeated : i === 2 ? t.InfantSeated2 : i === 3 ? t.InfantSeated3 : i === 4 ? t.InfantSeated4 : i === 5 ? t.InfantSeated5 : i === 6 ? t.InfantSeated6 : i === 7 ? t.InfantSeated7 : i === 8 ? t.InfantSeated8 : i === 9 ? t.InfantSeated9 : t.InfantSeatedPlural)), r
                                }, r = function (t) {
                                    var i = {
                                        wrapper:        $(".flight-pax-wrapper", t),
                                        input:          $(".pax-input", t),
                                        adult:          $(".pax-adult", t).val(),
                                        child:          $(".pax-child", t).val(),
                                        infant:         $(".pax-infant", t).val(),
                                        infantwithseat: $(".pax-infantwithseat", t).val()
                                    }, r;
                                    i.adult = i.adult > 0 ? i.adult + " " + n("adult", i.adult) : "";
                                    i.child = i.child > 0 ? "+" + i.child + " " + n("child", i.child) : "";
                                    i.infant = i.infant > 0 ? "+" + i.infant + " " + n("infant", i.infant) : "";
                                    i.infantwithseat = i.infantwithseat > 0 ? "+" + i.infantwithseat + " " + n("infantwithseat", i.infantwithseat) : "";
                                    i.input.val(i.adult);
                                    i.wrapper.find(".flight-pax-info").remove();
                                    i.child !== "" || i.infant !== "" || i.infantwithseat !== "" ? (r = '<div class="flight-pax-info d-flex flex-wrap">', i.child !== "" && (r += "<div>" + i.child + "<\/div>"), i.infant !== "" && (r += "<div>" + i.infant + "<\/div>"), i.infantwithseat !== "" && (r += "<div>" + i.infantwithseat + "<\/div>"), r += "<\/div>", i.wrapper.append(r), i.wrapper.addClass("pax-added")) : i.wrapper.removeClass("pax-added")
                                };
                                return {
                                    init:         function (n) {
                                        return u(n)
                                    }, paxText:   function (t, i) {
                                        return n(t, i)
                                    }, paxUpdate: function (n) {
                                        return r(n)
                                    }, spinUp:    function (n) {
                                        return i(n, "up")
                                    }, spinDown:  function (n) {
                                        return i(n, "down")
                                    }
                                }
                            }(), f = function (n) {
                                return moment(n, "DD.MM.YYYY").format("YYYY-MM-DD")
                            }, a = function (n) {
                                var i = $(n), t = {
                                    type: i.find('[name="flight-type"]'),
                                    departure: i.find(".location-departure").first(),
                                    selectedDeparture: {},
                                    arrival: i.find(".location-arrival").first(),
                                    selectedArrival: {},
                                    reverse: i.find(".location-reverse"),
                                    dateOnewayDeparture: i.find(".datepicker-oneway-departure").first(),
                                    dateRoundtripDeparture: i.find(".datepicker-roundtrip-departure").first(),
                                    dateRoundtripReturn: i.find(".datepicker-roundtrip-return").first(),
                                    adult: i.find(".flight-pax-wrapper .pax-adult"),
                                    child: i.find(".flight-pax-wrapper .pax-child"),
                                    infant: i.find(".flight-pax-wrapper .pax-infant"),
                                    infantWithSeat: i.find(".flight-pax-wrapper .pax-infantwithseat"),
                                    "class": i.find(".search-option-class"),
                                    airlineFilter: i.find(".airline-filter"),
                                    airlineFilterDropdown: i.find(".search-option-airline"),
                                    airlineFilterText: i.find(".airline-filter-text"),
                                    airlineFilterData: [],
                                    selectedAirlines: [],
                                    selectedClass: i.find(".search-class-selected"),
                                    isDirectFlight: i.find(".is-direct-flight"),
                                    isThreeDays: i.find(".is-three-days"),
                                    multi: i.find(".flight-multi"),
                                    searchButton: i.find(".search-button .btn"),
                                    searchData: {}
                                }, r, u, f;
                                localStorage.getItem("FlightSearchModel") && (t.searchData = JSON.parse(localStorage.getItem("FlightSearchModel")), t.searchData.FlightType && t.type.filter('[value="' + t.searchData.FlightType + '"]').click(), r = t.departure.closest(".location-input-wrapper"), $.isEmptyObject(t.searchData.DepartureCity) || (t.departure.val(t.searchData.DepartureCity.Value), t.departure.data("type", t.searchData.DepartureCity.Type), t.departure.data("code", t.searchData.DepartureCity.Code), t.selectedDeparture = t.searchData.DepartureCity, r.find(".autocomplete-selected-code").length > 0 ? r.find(".autocomplete-selected-code").html(t.searchData.DepartureCity.Code) : r.append('<span class="autocomplete-selected-code">' + t.searchData.DepartureCity.Code + "<\/span>"), _.isEmpty(t.searchData.DepartureCity.Code) ? (t.departure.val(""), r.find(".autocomplete-selected-code").hide()) : r.find(".autocomplete-selected-code").show()), u = t.arrival.closest(".location-input-wrapper"), $.isEmptyObject(t.searchData.ArrivalCity) || (t.arrival.val(t.searchData.ArrivalCity.Value), t.arrival.data("type", t.searchData.ArrivalCity.Type), t.arrival.data("code", t.searchData.ArrivalCity.Code), t.selectedArrival = t.searchData.ArrivalCity, u.find(".autocomplete-selected-code").length > 0 ? u.find(".autocomplete-selected-code").html(t.searchData.ArrivalCity.Code) : u.append('<span class="autocomplete-selected-code">' + t.searchData.ArrivalCity.Code + "<\/span>"), _.isEmpty(t.searchData.ArrivalCity.Code) ? (t.arrival.val(""), u.find(".autocomplete-selected-code").hide()) : u.find(".autocomplete-selected-code").show()), t.searchData.DepartureDate && new Date(new Date(t.searchData.DepartureDate).toDateString()) >= new Date((new Date).toDateString()) ? (t.dateOnewayDeparture.val(moment(t.searchData.DepartureDate).format("DD.MM.YYYY")), t.dateRoundtripDeparture.val(moment(t.searchData.DepartureDate).format("DD.MM.YYYY")), t.dateRoundtripReturn.val(moment(t.searchData.DepartureDate).format("DD.MM.YYYY"))) : (t.dateOnewayDeparture.val(moment(new Date).format("DD.MM.YYYY")), t.dateRoundtripDeparture.val(moment(new Date).format("DD.MM.YYYY")), t.dateRoundtripReturn.val(moment(new Date).format("DD.MM.YYYY"))), t.searchData.ReturnDate && new Date(new Date(t.searchData.ReturnDate).toDateString()) >= new Date((new Date).toDateString()) && t.dateRoundtripReturn.val(moment(t.searchData.ReturnDate).format("DD.MM.YYYY")), _.isNil(t.searchData.AdultCount) || t.adult.val(t.searchData.AdultCount), _.isNil(t.searchData.ChildCount) || t.child.val(t.searchData.ChildCount), _.isNil(t.searchData.InfantCount) || t.infant.val(t.searchData.InfantCount), _.isNil(t.searchData.InfantSeatedCount) || t.infantWithSeat.val(t.searchData.InfantSeatedCount), e.paxUpdate(n), _.isEmpty(t.searchData.AirlineCodes) || (f = "", $.map(t.searchData.AirlineCodes, function (n) {
                                    f += '<span class="filter-badge" data-code="' + n + '">' + n + "<\/span>"
                                }), t.airlineFilterText.closest(".search-dropdown").removeClass("no-text"), t.airlineFilterText.html(f)), t.searchData.Class && t.class.find('[data-value="' + t.searchData.Class + '"]').click(), t.isThreeDays.prop("checked", t.searchData.IsThreeDays), t.isDirectFlight.prop("checked", t.searchData.IsDirectFlight), t.searchData.FlightType === "MultiDestination" && ($.map(t.searchData.Destinations, function (n, i) {
                                    i > 1 && t.multi.find(".btn-add-flight").last().click()
                                }), t.multi.find(".flight-multi-item").each(function (n) {
                                    var r = $(this), i = {
                                        departure: r.find(".location-departure"),
                                        selectedDeparture: {},
                                        arrival: r.find(".location-arrival"),
                                        selectedArrival: {},
                                        datepicker: r.find(".datepicker-input")
                                    };
                                    i.departure.val(t.searchData.Destinations[n].DepartureCity.Value);
                                    i.departure.data("type", t.searchData.Destinations[n].DepartureCity.Type);
                                    i.departure.data("code", t.searchData.Destinations[n].DepartureCity.Code);
                                    i.departure.next(".autocomplete-selected-code").length > 0 ? i.departure.next(".autocomplete-selected-code").html(t.searchData.Destinations[n].DepartureCity.Code) : i.departure.after('<span class="autocomplete-selected-code">' + t.searchData.Destinations[n].DepartureCity.Code + "<\/span>");
                                    i.departure.next(".autocomplete-selected-code").show();
                                    i.selectedDeparture = t.searchData.Destinations[n].DepartureCity;
                                    i.departure.data("destination", i.selectedDeparture);
                                    i.arrival.val(t.searchData.Destinations[n].ArrivalCity.Value);
                                    i.arrival.data("type", t.searchData.Destinations[n].ArrivalCity.Type);
                                    i.arrival.data("code", t.searchData.Destinations[n].ArrivalCity.Code);
                                    i.arrival.next(".autocomplete-selected-code").length > 0 ? i.arrival.next(".autocomplete-selected-code").html(t.searchData.Destinations[n].ArrivalCity.Code) : i.arrival.after('<span class="autocomplete-selected-code">' + t.searchData.Destinations[n].ArrivalCity.Code + "<\/span>");
                                    i.arrival.next(".autocomplete-selected-code").show();
                                    i.selectedArrival = t.searchData.Destinations[n].ArrivalCity;
                                    i.arrival.data("destination", i.selectedArrival);
                                    i.datepicker.val(moment(t.searchData.Destinations[n].DepartureDate).format("DD.MM.YYYY"))
                                })))
                            }, v = function (n) {
                                var t = {
                                        type: $('[name="flight-type"]', n),
                                        selectedDeparture: {
                                            Type:  $(".location-departure", n).data("type"),
                                            Code:  $(".location-departure", n).data("code"),
                                            Value: $(".location-departure", n).val()
                                        },
                                        selectedArrival: {
                                            Type:  $(".location-arrival", n).data("type"),
                                            Code:  $(".location-arrival", n).data("code"),
                                            Value: $(".location-arrival", n).val()
                                        },
                                        dateOnewayDeparture: $(".datepicker-oneway-departure", n),
                                        dateRoundtripDeparture: $(".datepicker-roundtrip-departure", n),
                                        dateRoundtripReturn: $(".datepicker-roundtrip-return", n),
                                        selectedClass: $(".search-option-class .selected", n),
                                        adult: $(".pax-adult", n),
                                        child: $(".pax-child", n),
                                        infant: $(".pax-infant", n),
                                        infantWithSeat: $(".pax-infantwithseat", n),
                                        isThreeDays: $(".is-three-days", n),
                                        isDirectFlight: $(".is-direct-flight", n),
                                        airlineFilterText: $(".airline-filter-text", n),
                                        multi: $(".flight-multi", n)
                                    }, i = t.type.filter(":checked").val(),
                                    h = i === "OneWay" ? f(t.dateOnewayDeparture.val()) : f(t.dateRoundtripDeparture.val()),
                                    c = i === "OneWay" ? "" : f(t.dateRoundtripReturn.val()),
                                    l = parseInt(t.adult.val()), a = parseInt(t.child.val()),
                                    v = parseInt(t.infant.val()), y = parseInt(t.infantWithSeat.val()),
                                    p = t.selectedClass.data("value"), r = t.isThreeDays.is(":checked"),
                                    w = t.isDirectFlight.is(":checked"), e = [], o = [], s;
                                return t.airlineFilterText.find(".filter-badge").length && t.airlineFilterText.find(".filter-badge").each(function () {
                                    e.push($(this).text())
                                }), i === "MultiDestination" && (r = !1, t.multi.find(".flight-multi-item").each(function () {
                                    var n = $(this);
                                    o.push({
                                        DepartureCity: {
                                            Type:  n.find(".location-departure").data("type"),
                                            Code:  n.find(".location-departure").data("code"),
                                            Value: n.find(".location-departure").val()
                                        },
                                        ArrivalCity: {
                                            Type:  n.find(".location-arrival").data("type"),
                                            Code:  n.find(".location-arrival").data("code"),
                                            Value: n.find(".location-arrival").val()
                                        },
                                        DepartureDate: f(n.find(".datepicker-multi-departure").val())
                                    })
                                })), s = {
                                    FlightType:        i,
                                    DepartureCity:     t.selectedDeparture,
                                    DepartureDate:     h,
                                    ArrivalCity:       t.selectedArrival,
                                    ReturnDate:        c,
                                    Destinations:      o,
                                    AdultCount:        l,
                                    ChildCount:        a,
                                    InfantCount:       v,
                                    InfantSeatedCount: y,
                                    Class:             p,
                                    AirlineCodes:      e,
                                    IsThreeDays:       r,
                                    IsDirectFlight:    w
                                }, _.isNil(t.dateOnewayDeparture.val()) ? u.add(t.dateOnewayDeparture) : u.remove(t.dateOnewayDeparture), s
                            }, y = function (n) {
                                var t = "";
                                return $.isEmptyObject(n) || (n.FlightType === "OneWay" ? (t += "ds[0].de.lc=" + n.DepartureCity.Code, t += "&ds[0].de.lt=" + n.DepartureCity.Type, t += "&ds[0].ar.lc=" + n.ArrivalCity.Code, t += "&ds[0].ar.lt=" + n.ArrivalCity.Type, t += "&ds[0].dd=" + n.DepartureDate) : n.FlightType === "RoundTrip" ? (t += "ds[0].de.lc=" + n.DepartureCity.Code, t += "&ds[0].de.lt=" + n.DepartureCity.Type, t += "&ds[0].ar.lc=" + n.ArrivalCity.Code, t += "&ds[0].ar.lt=" + n.ArrivalCity.Type, t += "&ds[0].dd=" + n.DepartureDate, t += "&ds[1].de.lc=" + n.ArrivalCity.Code, t += "&ds[1].de.lt=" + n.ArrivalCity.Type, t += "&ds[1].ar.lc=" + n.DepartureCity.Code, t += "&ds[1].ar.lt=" + n.DepartureCity.Type, t += "&ds[1].dd=" + n.ReturnDate) : n.FlightType === "MultiDestination" && ($.isEmptyObject(n.Destinations) || $.map(n.Destinations, function (n, i) {
                                    i > 0 && (t += "&");
                                    t += "ds[" + i + "].de.lc=" + n.DepartureCity.Code;
                                    t += "&ds[" + i + "].de.lt=" + n.DepartureCity.Type;
                                    t += "&ds[" + i + "].ar.lc=" + n.ArrivalCity.Code;
                                    t += "&ds[" + i + "].ar.lt=" + n.ArrivalCity.Type;
                                    t += "&ds[" + i + "].dd=" + n.DepartureDate
                                })), n.FlightType === "OneWay" ? t += "&ft=0" : n.FlightType === "RoundTrip" ? t += "&ft=1" : n.FlightType === "MultiDestination" && (t += "&ft=2"), t += n.AdultCount ? "&ad=" + n.AdultCount : "", t += n.ChildCount ? "&ch=" + n.ChildCount : "", t += n.InfantCount ? "&in=" + n.InfantCount : "", t += n.InfantSeatedCount ? "&is=" + n.InfantSeatedCount : "", t += n.Class === "First" ? "&cl=1" : "", t += n.Class === "Business" ? "&cl=2" : "", t += n.Class === "Economy" ? "&cl=3" : "", t += n.Class === "PremiumEconomy" ? "&cl=4" : "", t += n.IsThreeDays ? "&td=true" : "", t += n.IsDirectFlight ? "&df=true" : "", t += n.IsOnlyLowCost ? "&lc=true" : "", $.isEmptyObject(n.AirlineCodes) || $.map(n.AirlineCodes, function (n, i) {
                                    t += "&ac[" + i + "]=" + n
                                })), t
                            }, p = function (t) {
                                var r, u, f;
                                i.validateRequiredModel(t) && (r = v(t), u = y(r), r === !1 || _.isEmpty(u) || (n.travelloader.show(), f = $gdsUrl + "/FlightV2/Search/Index?" + u + "&external=true", localStorage.setItem("FlightSearchModel", JSON.stringify(r)), window.open(f)), n.travelloader.hide())
                            }, i = function () {
                                var t = function (n) {
                                    $(n).on("focus", ".required", function () {
                                        u.remove($(this))
                                    })
                                }, n = function (n) {
                                    var t = !0, i = i18n_en.partials.searchTabs.flightSearch.requiredErrorMessage;
                                    return _.isEmpty(n.val()) ? (t = !1, u.add(n, i)) : u.remove(n), t
                                }, i = function (t) {
                                    var i = !0;
                                    return $(".required:visible", t).each(function () {
                                        n($(this)) || (i = !1)
                                    }), i
                                };
                                return {
                                    init:                     function (n) {
                                        return t(n)
                                    }, validateRequiredInput: function (t) {
                                        return n(t)
                                    }, validateRequiredModel: function (n) {
                                        return i(n)
                                    }
                                }
                            }(), u = function () {
                                var n = function (n, t) {
                                    n.addClass("validate-error");
                                    _.isEmpty(t) || (n.popover({
                                        toggle:    "popover",
                                        placement: "top",
                                        trigger:   "focus",
                                        content:   t,
                                        container: n.closest("div"),
                                        template:  '<div class="passenger-validate-error-popover popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
                                    }), n.popover("show"))
                                }, t = function (n) {
                                    n.removeClass("validate-error");
                                    n.closest("div").find(".popover").remove()
                                };
                                return {
                                    add:       function (t, i) {
                                        return n(t, i)
                                    }, remove: function (n) {
                                        return t(n)
                                    }
                                }
                            }();
                            return {
                                init: function () {
                                    moduleFactory.registerModule(r, o)
                                }
                            }
                        };
                    return {
                        getInstance: function () {
                            return i || (i = u()), i
                        }
                    }
                }(), i = t.getInstance();
                i.init()
            }).call(this)
        }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
    }, {}]
}, {}, [1]);
"use strict";
var $stage = "coral", $gdsUrl = "https://booking.coral.ru", $urlAppendix = "",
    $ascr = "c6cdb0f4ddb8840e8eceeda17cd77073";
(function () {
    function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (h = "function" == typeof require && require, !o && h) return h(f, !0);
                    if (e) return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                s = i[f] = { exports: {} };
                t[f][0].call(s.exports, function (n) {
                    var i = t[f][1][n];
                    return u(i || n)
                }, s, s.exports, n, t, i, r)
            }
            return i[f].exports
        }

        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++) u(r[f]);
        return u
    }

    return n
})()({
    1: [function () {
        (function (n) {
            (function () {
                var t = function () {
                    var i = "headerWidget", t = void 0, r = function () {
                        var s = "a-zA-ZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяЁё", t = null,
                            f = null, a = function (n) {
                                t = n;
                                r.currencyTopside();
                                r.wishlistTopside();
                                r.quickSearchTopSide();
                                r.handleLoginModalTopSide(n);
                                r.geolocationTopSide();
                                h.callbackModalHeader();
                                h.rightMenuOptionsHeader();
                                e.destinationMenu();
                                e.reservationCheckModal();
                                u.init();
                                w();
                                y();
                                c();
                                p();
                                l(n);
                                v()
                            }, u = {
                                $el:                       null, init: function () {
                                    u.handleToggleButton();
                                    u.handleCloseButton();
                                    u.cloneDepartures();
                                    u.cloneMenus();
                                    u.cloneExchange();
                                    u.handleCallUsButton()
                                }, handleToggleButton:     function () {
                                    $(".mobilemenutoggler > span", t).on("click", function (t) {
                                        t.preventDefault();
                                        $(this).closest(".mobilemenutoggler").hasClass("expanded") ? (n.preventpagescroll.remove(), $(this).closest(".mobilemenutoggler").removeClass("expanded")) : (n.preventpagescroll.init(), $(this).closest(".mobilemenutoggler").addClass("expanded"))
                                    })
                                }, handleCloseButton:      function () {
                                    $(".offsetmenuheader > .offsetmenuclose > i", t).on("click", function (t) {
                                        t.preventDefault();
                                        n.preventpagescroll.remove();
                                        $(".mobilemenutoggler").removeClass("expanded")
                                    })
                                }, cloneDepartures:        function () {
                                    var i = $(".geolocation-item", ".geolocation-list"),
                                        r = $(".geolocation-current").data("itemname"),
                                        e = $(".geolocation-current").data("itemid"), n = [], t = "";
                                    _.forEach(i, function (i) {
                                        var r = $(i).text(), f = $(i).data("departureid"),
                                            o = e === $(i).data("departureid");
                                        n.push({ title: r, id: f, selected: o });
                                        t += u.createDepatureListItem(f, r, o)
                                    });
                                    u.handleDeparturePanel();
                                    $(".departuresearchwrapper").data("model", n);
                                    f = n;
                                    $("ul", ".offsetDepartureMenu").html(t);
                                    u.prepareDepartureInputs(r);
                                    u.handleDepartureClick()
                                }, prepareDepartureInputs: function (n) {
                                    $("input.ghostInput", ".departuresearchwrapper").val(n);
                                    $("input.departureFilterInput", ".departuresearchwrapper").attr("placeholder", n)
                                }, createDepatureListItem: function (n, t, i) {
                                    return "<li data-departureid=" + n + " " + (i ? 'class="selected"' : "") + ">" + t + "<\/li>"
                                }, handleDeparturePanel:   function () {
                                    $("input.ghostInput", ".departuresearchwrapper").on("click", function () {
                                        $(".offsetDepartureMenu").addClass("expanded");
                                        n.preventpagescroll.init(".mobileoffsetmenucontainer");
                                        $("input.departureFilterInput").trigger("focus")
                                    });
                                    $(".header > .offsetmenuclose", ".offsetDepartureMenu").on("click", function (t) {
                                        t.preventDefault();
                                        n.preventpagescroll.remove(".mobileoffsetmenucontainer");
                                        $(".offsetDepartureMenu").removeClass("expanded")
                                    });
                                    u.handleDepartureFilter()
                                }, handleDepartureFilter:  function () {
                                    $(".departureFilterInput").on("input", function () {
                                        var n = "", t = $(this).val(), i = t.length > 0 ? _.filter(f, function (n) {
                                            return n.title.includes(t)
                                        }) : f;
                                        i.length > 0 && _.forEach(i, function (t) {
                                            n += u.createDepatureListItem(t.id, t.title, t.selected)
                                        });
                                        $("ul", ".offsetDepartureMenu").html(n)
                                    })
                                }, handleDepartureClick:   function () {
                                    $(".offsetDepartureMenu").on("click", "ul > li:not(.selected)", function () {
                                        var t = $(this).data("departureid");
                                        n.travelloader.show();
                                        $(".geolocation-item[data-departureid=" + t + "]", ".geolocation-list").trigger("click")
                                    })
                                }, cloneMenus:             function () {
                                    $(".mobileoffsetmenucontainer > .mainmenuwrapper > ul", t).append($(".menuList > ul", t).html());
                                    e.reservationCheckModal()
                                }, cloneExchange:          function () {
                                    var n = "", u = $(".currency-list > ul > li", t),
                                        f = $(".currency-list > ul > li.selected").data("currencyid"), i, r;
                                    _.forEach(u, function (t) {
                                        var i = $(t).data("currencyid"), r = $(t).find(".currency-name").text();
                                        n += '<option data-currencyid="' + i + '" ' + (f === i ? "selected" : "") + ">" + r + "<\/option>"
                                    });
                                    $(".mobileoffsetmenucontainer > .currencymenuwrapper > .currency", t).html('<select class="currencyselect form-control">' + n + "<\/select>");
                                    $(document).on("change", "select.currencyselect", function () {
                                        $("li[data-currencyid=" + $("option:selected", this).data("currencyid") + "]").trigger("click")
                                    });
                                    i = $(".flexbox-exchange").clone();
                                    $(".mobileoffsetmenucontainer > .currencymenuwrapper > .exchangerates", t).html(i);
                                    r = $(".mobileoffsetmenucontainer > .currencymenuwrapper > .exchangerates", t).find("img");
                                    _.forEach(r, function (n) {
                                        $(n).removeClass("lazy").attr("src", $(n).data("src"))
                                    })
                                }, handleCallUsButton:     function () {
                                    $(".btnMobileCallUs", t).on("click", function () {
                                        $(".container-phone > a", t).trigger("click");
                                        var n = $(".commonModal");
                                        $(".modal-dialog", n).addClass("h-auto w-auto");
                                        n.on("hidden.bs.modal", function () {
                                            $(".modal-dialog", n).removeClass("h-auto w-auto")
                                        })
                                    })
                                }
                            }, r = {
                                currencyTopside:               function () {
                                    var t = $(".headerCurrency"), r = $(".currency-current", t), i = $(".currency-list", t),
                                        u = $("li.selected", i).html(), f = $(".currencymenuwrapper", ".mobilenav");
                                    $(r, t).html(u);
                                    $("hr", r).remove();
                                    $(document).on("click", function (n) {
                                        $(n.target).hasClass("headerCurrency") || $(n.target).hasClass("currency-list") || $(n.target).hasClass("currency-current") || $(n.target).hasClass("currency-icon") || $(n.target).hasClass("currency-name") || $(n.target).hasClass("top-currency-arrow-down") ? t.hasClass("listShow") ? (i.slideToggle("fast"), t.removeClass("listShow")) : (i.slideDown("fast"), t.addClass("listShow")) : (i.slideUp("fast"), t.removeClass("listShow"));
                                        $(window).on("scroll", function () {
                                            i.slideUp("fast");
                                            t.removeClass("listShow")
                                        })
                                    });
                                    $("li", i).on("click", function (n) {
                                        n.preventDefault();
                                        var i = $(this).html(), u = $(this).data("currencyid");
                                        $.ajax({
                                            type: "post", url: "/v1/currency/" + u, success: function () {
                                                location.reload()
                                            }
                                        });
                                        $(r, t).html(i);
                                        $("hr", r).remove()
                                    });
                                    $(f, document).on("click", "li", function (t) {
                                        t.preventDefault();
                                        n.travelloader.show("Calculating...");
                                        var i = $(this).data("currencyid");
                                        $.ajax({
                                            type: "post", url: "/v1/currency/" + i, success: function () {
                                                location.reload()
                                            }
                                        })
                                    })
                                }, wishlistTopside:            function () {
                                    var t = $(".topItem.wishlist"), i = $(".wishlist-list", t);
                                    $(".wishlist-btn", t).hover(function () {
                                        $("i", this).text("favorite")
                                    }, function () {
                                        $("i", this).text("favorite_border")
                                    });
                                    $(document).on("click", function (r) {
                                        $(r.target).hasClass("wishlist-top-icon") || $(r.target).hasClass("wishlist-top-icon") || $(r.target).hasClass("wishlist-icon-badge") ? (n.canvasloader.add($("ul", ".wishlist-list")), $.ajax({
                                            type:     "GET",
                                            url:      "/v1/customer/getwishlist/basic",
                                            datatype: "json",
                                            success:  function (n) {
                                                $("ul", ".wishlist-list").empty();
                                                _.isNil(n) || n === "" ? $("ul", ".wishlist-list").append('<div class="title d-block">' + i18n_en.partials.header.emptyWishlist + "<\/div>") : $("ul > li", ".wishlist-list").length > 0 ? ($("ul", ".wishlist-list").append(n), $(".wishlist-top-go-btn").removeClass("btnHide")) : ($("ul", ".wishlist-list").append(n), $(".wishlist-top-go-btn").removeClass("btnHide"))
                                            },
                                            error:    function (n) {
                                                console.log(n)
                                            },
                                            complete: function () {
                                                n.canvasloader.remove($("ul", ".wishlist-list"))
                                            }
                                        }), t.hasClass("listShow") ? (i.slideUp("fast"), t.removeClass("listShow")) : (i.slideToggle("fast"), t.addClass("listShow"))) : (i.slideUp("fast"), t.removeClass("listShow"));
                                        $(window).on("scroll", function () {
                                            i.slideUp("fast");
                                            t.removeClass("listShow")
                                        })
                                    })
                                }, quickSearchTopSide:         function () {
                                    var n = $(".topItem.quickSearch"), t = $(".quickSearch-input-container", n),
                                        i = $(".quickSearch-input", t);
                                    $(document).on("click", function (r) {
                                        $(r.target).hasClass("quickSearch") || $(r.target).hasClass("quickSearch-container") || $(r.target).hasClass("quickSearch-icon") ? n.hasClass("listShow") ? (t.slideUp("fast"), n.removeClass("listShow"), i.val("")) : (t.slideDown("fast"), n.addClass("listShow")) : $(r.target).hasClass("quickSearch-input") || $(r.target).hasClass("quickSearch-input-container") || $(r.target).hasClass("quickSearch-search-btn-icon") || (t.slideUp("fast"), n.removeClass("listShow"), i.val(""));
                                        $(window).on("scroll", function () {
                                            t.slideUp("fast");
                                            n.removeClass("listShow");
                                            i.val("")
                                        })
                                    });
                                    window.onscroll = function () {
                                        t.slideUp("fast");
                                        n.removeClass("listShow")
                                    };
                                    $(".quickSearch-input", n).keypress(function (n) {
                                        var t = n.which;
                                        t === 13
                                    })
                                }, handleLoginModalTopSide:    function (t) {
                                    var f = $(".container-topside .topItem.loginRegister, .profilemenuwrapper > .loginRegister", t),
                                        i, u;
                                    f.off("click").on("click", function (n) {
                                        n.preventDefault();
                                        r.loginModalTopSide(t)
                                    });
                                    i = $(".topItem.loggedInUser", ".container-topside");
                                    u = $(".myAccountList", i);
                                    $(document).on("click", function (n) {
                                        $(n.target).hasClass("loggedInUser") || $(n.target).hasClass("loggedInUser-icon") || $(n.target).hasClass("loggedInUser-btn") ? u.slideToggle("fast", function () {
                                            u.is(":visible") ? i.addClass("showlist") : i.removeClass("showlist")
                                        }) : u.slideUp("fast", function () {
                                            i.removeClass("showlist")
                                        })
                                    });
                                    $(t).on("click", ".btnLogOut", function () {
                                        n.travelloader.show();
                                        $.ajax({
                                            type:     "post", url: "/v1/customer/logout", success: function () {
                                                location.href = "/"
                                            }, error: function (t) {
                                                n.travelloader.hide();
                                                console.log(t)
                                            }
                                        })
                                    })
                                }, loginModalTopSide:          function (t) {
                                    var f = $(".container-topside .topItem.loginRegister, .mobilenav .loginRegister", t),
                                        u = "modalLogin", i = $(".commonModal"), e = 5e3;
                                    n.modalloader.add(i);
                                    !$(".loginModalDialog", i).length > 0 && n.commonmodal.show({ url: "/v1/customer/modal/login" }, {
                                        targetModal: "commonModal",
                                        additionalClass: u,
                                        modalDialogClass: "loginModalDialog",
                                        coverOnMobile: !0,
                                        modalHeader: { title: i18n_en.modals.loginmodal.headerTitle }
                                    }, function () {
                                        n.modalloader.remove();
                                        $(".showPass", i).off("click").on("click", function () {
                                            o($(".inputLoginPassword"))
                                        });
                                        $(".btnLogin", i).off("click").on("click", function (t) {
                                            t.preventDefault();
                                            var r = $(".inputLoginEmail", i), u = $(".inputLoginPassword", i),
                                                f = $(".checkRememberMe ", i),
                                                o = { Email: r.val(), Password: u.val(), IsRememberMe: f.prop("checked") };
                                            r.attr("disabled", "disabled");
                                            u.attr("disabled", "disabled");
                                            $(".btnLogin", i).attr("disabled", "disabled");
                                            n.canvasloader.add($(".modal-content", ".loginModalDialog"));
                                            $.ajax({
                                                type:     "post",
                                                url:      "/v1/customer/login",
                                                data:     o,
                                                datatype: "json",
                                                success:  function () {
                                                    $(".bookingTransactionModalContainer") && localStorage.removeItem("bookingTransactionViewCurrentUser");
                                                    location.reload()
                                                },
                                                error:    function (t) {
                                                    n.canvasloader.remove($(".modal-content", ".loginModalDialog"));
                                                    $("h1", i).after('<div class="general-message error mb-3" style="display: none; visibility: visible;"><i class="material-icons">&#xe002<\/i>' + (t.status === 401 ? i18n_en.partials.header.usernameOrPasswordError : i18n_en.global.errorMessage) + "<\/div>");
                                                    $(".general-message", i).slideDown("fast");
                                                    setTimeout(function () {
                                                        $(".general-message", i).slideUp("fast", function () {
                                                            $(".general-message", i).remove()
                                                        })
                                                    }, e)
                                                },
                                                complete: function () {
                                                    r.removeAttr("disabled");
                                                    u.removeAttr("disabled");
                                                    $(".btnLogin", i).removeAttr("disabled")
                                                }
                                            })
                                        });
                                        $(".btnGoRegister", i).off("click").on("click", function (f) {
                                            f.preventDefault();
                                            n.modalloader.add(i);
                                            i.removeClass(u);
                                            r.registerModalTopSide(t)
                                        });
                                        $(".forgotPassword > span", i).on("click", function (t) {
                                            t.preventDefault();
                                            n.modalloader.add(i);
                                            i.removeClass(u);
                                            r.forgotPasswordModalTopSide()
                                        })
                                    });
                                    void 0 && f.trigger("click")
                                }, triggerTooltip:             function (n, t) {
                                    n.closest(".form-group").find("label.validate-error").attr("title", t);
                                    n.closest(".form-group").find("label.validate-error").attr("data-orginal-title", t);
                                    n.closest(".form-group").find("label.validate-error").tooltip("dispose");
                                    n.closest(".form-group").find("label.validate-error").tooltip({
                                        trigger:   "hover",
                                        title:     t,
                                        placement: "top",
                                        toggle:    "tooltip"
                                    });
                                    (n.hasClass("inputRegisterPassword") || n.hasClass("inputRegisterPasswordVerify")) && (n.css("padding-right", "60px"), n.closest(".form-group").find("label.validate-error").css("right", "40px"))
                                }, formIsValid:                function (n, t) {
                                    return $(t).valid()
                                }, registerModalTopSide:       function (t) {
                                    var i = $(".commonModal"), u = "modalRegister";
                                    n.modalloader.add(i);
                                    n.commonmodal.show({ url: "/v1/customer/modal/register" }, {
                                        targetModal: "commonModal",
                                        additionalClass: u,
                                        modalDialogClass: "registerModalDialog",
                                        coverOnMobile: !0,
                                        modalHeader: { title: i18n_en.modals.registermodal.headerTitle }
                                    }, function () {
                                        n.modalloader.remove();
                                        var f = $(".selectRegisterPhonePrefix", i).val();
                                        r.applyMask(i, f);
                                        $(".selectRegisterPhonePrefix", i).on("change", function () {
                                            r.applyMask(i, $("option:selected", this).val())
                                        });
                                        $.validator.addMethod("phonemask", function (n, t, i) {
                                            if (i) {
                                                var r = n.split(""), u = _.find(r, function (n) {
                                                    return n === "x"
                                                });
                                                return u === undefined ? !0 : !1
                                            }
                                        });
                                        $.validator.addClassRules("inputRegisterMobilePhone", { phonemask: !0 });
                                        $("form.formRegister", i).validate({
                                            showErrors: function (n, t) {
                                                $.each(this.validElements(), function (n, t) {
                                                    var i = $(t);
                                                    i.closest(".form-group").find(".validate-error").tooltip("dispose");
                                                    i.closest(".form-group").find(".validate-error").remove()
                                                });
                                                $.each(t, function (n, t) {
                                                    var i = $(t.element);
                                                    i.closest(".form-group").find(".validate-error").tooltip("dispose");
                                                    i.closest(".form-group").find(".validate-error").remove();
                                                    i.closest(".form-group").append('<label class="validate-error"><i class="material-icons">&#xe000<\/i><\/label>');
                                                    i.closest(".form-group").find(".validate-error").tooltip({
                                                        trigger:   "hover focus",
                                                        title:     t.message,
                                                        placement: "top"
                                                    })
                                                })
                                            },
                                            errorElement: "label",
                                            errorClass: "validate-error",
                                            validClass: "validate-success",
                                            valid: "validate-success",
                                            html: !0,
                                            rules: {
                                                txtPasswordVerify: {
                                                    minlength: 8,
                                                    equalTo:   ".inputRegisterPassword"
                                                },
                                                txtName: { charset: s },
                                                txtSurname: { charset: s },
                                                txtMobilePhone: { checkPhone: !0 }
                                            }
                                        });
                                        $(".showPass", i).off("click").on("click", function (n) {
                                            n.preventDefault();
                                            o($(".inputRegisterPassword"))
                                        });
                                        $(".showPassVerify", i).off("click").on("click", function (n) {
                                            n.preventDefault();
                                            o($(".inputRegisterPasswordVerify"))
                                        });
                                        $(".checkRegisterPrivacyPolicy", i).on("click", function () {
                                            $(".checkRegisterPrivacyPolicy", i).prop("checked") ? $(".btnRegisterSubmit", i).removeAttr("disabled") : $(".btnRegisterSubmit", i).attr("disabled", "disabled")
                                        });
                                        $(".btnRegisterSubmit", i).off("click").on("click", function (u) {
                                            var f;
                                            if (u.preventDefault(), f = r.formIsValid(t, $("form.formRegister", ".registerModalDialog")), f) {
                                                n.canvasloader.add($(".modal-content", i));
                                                var e = $(".inputRegisterEmail", i).val(),
                                                    o = $(".inputRegisterName", i).val(),
                                                    s = $(".inputRegisterSurname", i).val(),
                                                    h = $(".inputRegisterPassword", i).val(),
                                                    c = $(".inputRegisterPasswordVerify", i).val(),
                                                    l = $(".selectRegisterPhonePrefix > option:selected", i).val(),
                                                    a = n.phoneMethods.concatPhone(l, $(".inputRegisterMobilePhone", i).val()),
                                                    v = $(".checkRegisterCookie", i).prop("checked"),
                                                    y = $(".checkRegisterEmailNewsletter", i).prop("checked"),
                                                    p = $(".checkRegisterSMS", i).prop("checked"), w = 1e4, b = {
                                                        Mail:               e,
                                                        Name:               o,
                                                        Surname:            s,
                                                        Password:           h,
                                                        RePassword:         c,
                                                        MobilePhone:        a,
                                                        IsCookiePermission: v,
                                                        AllowCampaignMail:  y,
                                                        AllowCampaignSms:   p
                                                    };
                                                $.ajax({
                                                    type:     "post",
                                                    url:      "/v1/customer/create",
                                                    data:     b,
                                                    datatype: "json",
                                                    success:  function (t) {
                                                        n.canvasloader.remove($(".modal-content", i));
                                                        n.generalsuccessmessage.show($("form.formRegister", i), i18n_en.partials.header.registerSuccess, !1);
                                                        $(".inputRegisterEmail", i).val("");
                                                        $(".inputRegisterName", i).val("");
                                                        $(".inputRegisterSurname", i).val("");
                                                        $(".inputRegisterPassword", i).val("");
                                                        $(".inputRegisterPasswordVerify", i).val("");
                                                        $(".inputRegisterPhonePrefix", i).val(70);
                                                        $(".inputRegisterMobilePhone", i).val("");
                                                        $(".checkRegisterCookie", i).prop("checked", "true");
                                                        $(".checkRegisterEmailNewsletter", i).prop("checked", "true");
                                                        $(".checkRegisterSMS", i).prop("checked", "true");
                                                        $(".checkRegisterPrivacyPolicy", i).trigger("click");
                                                        var r = $(".bookingTransactionModal");
                                                        if (r.length) {
                                                            r.data("iscurrentuser", !0);
                                                            r.data("currentuser", JSON.stringify(t.Customer));
                                                            $(i).on("hidden.bs.modal", function () {
                                                                var n = $(".loginRegister-btn").attr("booking-transaction-event-id");
                                                                _.each($(".btnBookingTransaction"), function (t) {
                                                                    n && $(t).data("booking-transaction-event-id") === _.toNumber(n) && $(t).click()
                                                                });
                                                                $(".loginRegister-btn").attr("booking-transaction-event-id", "")
                                                            })
                                                        }
                                                        n.dataLayerManager.registration()
                                                    },
                                                    error:    function (t) {
                                                        n.canvasloader.remove($(".modal-content", i));
                                                        t.status === 404 || t.status === 500 ? n.generalerrormessage.show($("form.formRegister", i), i18n_en.global.errorOccured, !1) : n.generalerrormessage.show($("form.formRegister", i), t.statusText, !1)
                                                    },
                                                    complete: function () {
                                                        var n = $(".general-message", i);
                                                        setTimeout(function () {
                                                            n.fadeOut("fast", function () {
                                                                setTimeout(function () {
                                                                    n.remove()
                                                                }, 100)
                                                            })
                                                        }, w)
                                                    }
                                                })
                                            }
                                        });
                                        $(".btnGoLogin", i).off("click").on("click", function (f) {
                                            f.preventDefault();
                                            n.modalloader.add(i);
                                            i.removeClass(u);
                                            r.loginModalTopSide(t)
                                        })
                                    })
                                }, applyMask:                  function (t, i) {
                                    var r = n.phoneMethods.getmask(i), u = r.mask, f = r.placeholder;
                                    $(".inputRegisterMobilePhone", t).inputmask(u, { placeholder: f })
                                }, forgotPasswordModalTopSide: function () {
                                    var t = $(".commonModal");
                                    n.modalloader.add(t);
                                    n.commonmodal.show({ url: "/v1/customer/modal/forgotpassword" }, {
                                        targetModal: "commonModal",
                                        additionalClass: "modalForgotPassword",
                                        modalDialogClass: "forgotPasswordModalDialog",
                                        modalHeader: { title: i18n_en.modals.forgotpasswordmodal.headerTitle }
                                    }, function () {
                                        n.modalloader.remove();
                                        $(".btnForgotPasswordSend", t).off("click").on("click", function () {
                                            var i = $(".formForgotPassword"),
                                                r = { Email: $(".inputForgotPasswordEmail", i).val() };
                                            $.ajax({
                                                type:     "get",
                                                url:      "/v1/customer/ForgotPasswordSendMail",
                                                data:     r,
                                                datatype: "json",
                                                success:  function (i) {
                                                    $("form.formForgotPassword").fadeOut("fast", function () {
                                                        i.IsSuccess ? n.generalsuccessmessage.show($(".modal-body", t), i18n_en.partials.header.resetPasswordCheckEmail) : n.commonmodal.hide()
                                                    })
                                                },
                                                error:    function (i) {
                                                    n.generalerrormessage.show($(".modal-body", t), i.ErrorMessage);
                                                    setTimeout(function () {
                                                        n.commonmodal.hide()
                                                    }, 5e3)
                                                }
                                            })
                                        });
                                        $(".btnForgotPasswordCancel", t).off("click").on("click", function () {
                                            n.commonmodal.hide("commonModal")
                                        })
                                    })
                                }, geolocationTopSide:         function () {
                                    var n = $(".topItem.geolocation"), t = $(".geolocation-list", n);
                                    $(document).on("click", function (i) {
                                        $(i.target).hasClass("geolocation") || $(i.target).hasClass("geolocation-current") || $(i.target).hasClass("geolocation-container") || $(i.target).hasClass("geolocation-list") ? (t.slideToggle({
                                            start:       function () {
                                                $(this).css({ display: "flex" })
                                            }, duration: "fast"
                                        }), $(".geolocation-container", n).toggleClass("menushow")) : (t.slideUp("fast"), $(".geolocation-container", n).removeClass("menushow"))
                                    });
                                    $(window).on("scroll", function () {
                                        t.slideUp("fast");
                                        $(".geolocation-container", n).removeClass("menushow");
                                        $(".myAccountList").slideUp("fast");
                                        $(".loggedInUser").removeClass("showlist")
                                    })
                                }
                            }, e = {
                                destinationMenu:          function () {
                                    $(document).off("click", ".countrymenu").on("click", ".countrymenu", function (t) {
                                        t.preventDefault();
                                        var r = $(".commonModal"), i = "countriesModalDialog";
                                        n.modalloader.add(r);
                                        n.commonmodal.show({ url: "/v1/destination/countriesandhotels" }, {
                                            targetModal: "commonModal",
                                            additionalClass: i,
                                            modalDialogClass: i,
                                            coverOnMobile: !0,
                                            modalHeader: { title: "Страны" }
                                        })
                                    })
                                }, reservationCheckModal: function () {
                                    var i = $(".commonModal"), u = 5e3, f = $(".menuBtnReservationCheck", t);
                                    f.on("click", function (f) {
                                        if (f.preventDefault(), !$(".reservationCheckModalDialog", i).length > 0) {
                                            n.modalloader.add(i);
                                            n.commonmodal.show({ url: "/v1/modal/reservationcheck" }, {
                                                targetModal: "commonModal",
                                                additionalClass: "reservationCheckModal",
                                                modalDialogClass: "reservationCheckModalDialog",
                                                modalHeader: { title: i18n_en.modals.reservationcheckmodal.headerTitle }
                                            }, function () {
                                                n.modalloader.remove();
                                                $(".txtRequestNumber", i).inputmask("9{1,20}", { placeholder: " " });
                                                $(".infoFieldTooltip", i).on("click", function (n) {
                                                    n.preventDefault()
                                                });
                                                $(".infoFieldTooltip", i).tooltip({ trigger: "hover", html: !0 })
                                            });
                                            $(i).on("click", ".reservationCheckInfo .login", function (n) {
                                                n.preventDefault();
                                                r.loginModalTopSide(t)
                                            });
                                            $(i).on("click", ".reservationCheckInfo .register", function (n) {
                                                n.preventDefault();
                                                r.registerModalTopSide(t)
                                            });
                                            $(i).on("click", ".btnReservationCheckFormSubmit", function () {
                                                var t = $(".txtRequestNumber", i).val(),
                                                    r = $(".txtDocumentNumberWithNoSeries", i).val(), f;
                                                t !== "" && r !== "" ? (n.canvasloader.add($(".modal-content", ".reservationCheckModalDialog")), $(".formReservationCheck input", i).prop("disabled", !0), f = "/v1/reservation/check/?voucherId=" + t + "&passportNumber=" + r, $.ajax({
                                                    type:    "get",
                                                    url:     f,
                                                    success: function (n) {
                                                        window.location.href = n.url
                                                    }
                                                })) : (n.canvasloader.remove($(".modal-content", ".reservationCheckModalDialog")), $(".formReservationCheck input", i).prop("disabled", !1), $(".general-message", i).remove(), $(".formReservationCheck", i).before('<div class="general-message error mb-3" style="display: none; visibility: visible;"><i class="material-icons">&#xe002<\/i>' + i18n_en.modals.reservationCheck.fieldsAreRequired + "<\/div>"), $(".general-message", i).slideDown("fast"), setTimeout(function () {
                                                    $(".general-message", i).slideUp("fast");
                                                    setTimeout(function () {
                                                        $(".general-message", i).remove()
                                                    }, 250)
                                                }, u))
                                            })
                                        }
                                    })
                                }
                            }, h = {
                                callbackModalHeader:       function () {
                                    var t = $(".container-tabs"), i = $(".commonModal"), r = "modalCallbackModal";
                                    $(".btnCallback-header", t).off("click").on("click", function () {
                                        n.modalloader.add(i);
                                        n.commonmodal.show({ url: "/v1/customer/modal/callback" }, {
                                            targetModal:     "commonModal",
                                            additionalClass: r
                                        })
                                    })
                                }, rightMenuOptionsHeader: function () {
                                    var i = $(".container-tabs"), n = $(".container-menu", i), t = $(".menuList", n);
                                    $(document).on("click", function (i) {
                                        $(i.target).hasClass("container-menu") || $(i.target).hasClass("menuTitle") || $(i.target).hasClass("menuIcon") ? (n.toggleClass("menushow"), t.slideToggle("fast")) : (t.slideUp("fast"), n.removeClass("menushow"));
                                        $(window).on("scroll", function () {
                                            t.slideUp("fast");
                                            n.removeClass("menushow")
                                        })
                                    })
                                }
                            }, c = function () {
                                function u(t) {
                                    t ? window.pageYOffset >= r - 5 ? (n.addClass("sticky"), n.addClass("container-fluid"), $(".flexboxDestination", ".flexboxTabContainer").css("max-width", "100%"), n.removeClass("container")) : (n.removeClass("sticky"), n.removeClass("container-fluid"), n.addClass("container")) : (n.removeClass("sticky"), n.removeClass("container-fluid"), n.addClass("container"), $(".flexboxDestination", ".flexboxTabContainer").css("max-width", "501px"))
                                }

                                var t = $(".container-logo img", ".site-header-container").attr("src");
                                _.isNil(t) || $(".stickyLogoContainer", ".flexboxTabContainer").html('<a href="/"><img class="stickyLogo img-fluid" src="' + t + '" /><\/a>');
                                var i = $(".container-tabItemWrap").attr("data-issticky"),
                                    n = $(".activeTab", ".container-tabItemWrap"), r = void 0;
                                window.onscroll = function () {
                                    $(window).width() < 1006.98 && (i = !1);
                                    u(i)
                                };
                                n.length > 0 && (r = n.offset().top)
                            }, v = function () {
                                $("body").on("tabChange", function (n, t) {
                                    var i = $(".showMoreTab", "[data-module=searchtabsmain]");
                                    i.is(":visible") && i.hide();
                                    $(".container-tabitem." + t).is(":visible") || $(".container-tabItemWrap .activeTab", "[data-module=searchtabsmain]").show();
                                    $(".search-summary", "[data-module=searchtabsmain]").hide()
                                })
                            }, y = function () {
                                function t(n) {
                                    $("[data-module=searchtabsmain]").data("ishomepage") || $("[data-module=searchtabsmain]").removeAttr("data-ishomepage");
                                    var t = $(".container-tabItemWrap"), i = $(".container-tabItem", t);
                                    _.forEach(i, function (n) {
                                        $(n).removeClass("activeTab")
                                    });
                                    $("." + n).addClass("activeTab")
                                }

                                var n = $(".container-other");
                                $(".tabItem", n).on("click", function () {
                                    $(".validateError", ".packagetour").popover("dispose");
                                    $(".validate-error", ".hotelsearch").popover("dispose");
                                    $(".validate-error", ".flightticket").popover("dispose");
                                    var i = $(this).data("tabtype"), r = $(".tabItem", n);
                                    _.forEach(r, function (n) {
                                        $(n).removeClass("active")
                                    });
                                    $(this).addClass("active");
                                    t(i);
                                    $(this).trigger("tabChange", i);
                                    localStorage.setItem("ActiveTab", i);
                                    c()
                                })
                            }, p = function () {
                                var n = $(".container-tabs-main").attr("data-activetab"), t;
                                n || (n = localStorage.getItem("ActiveTab") ? localStorage.getItem("ActiveTab") : "packagetour");
                                $(".container-tabs > .tabItem[data-tabtype=" + n + "]").addClass("active").siblings().removeClass("active");
                                t = $(".container-tabs > .tabItem.active").data("tabtype");
                                $(".container-tabItem.activeTab", ".container-tabItemWrap").removeClass("activeTab");
                                $("." + t).addClass("activeTab")
                            }, w = function () {
                                $("label").click(function () {
                                    var n = $(this).attr("for");
                                    $("." + n).focus()
                                })
                            }, l = function l(t) {
                                $(".container-phone a", t).on("click", function (t) {
                                    t.preventDefault();
                                    n.modalloader.add($(".commonModal"));
                                    n.commonmodal.show({ url: "/v1/customer/modal/phonemodule" }, {
                                        targetModal: "commonModal",
                                        additionalClass: l,
                                        modalDialogClass: "phoneModalDialog",
                                        modalHeader: { title: " " }
                                    }, function () {
                                        n.modalloader.remove()
                                    })
                                })
                            }, o = function (n) {
                                var t = n.attr("type");
                                t === "password" ? (n.attr("type", "text"), $(undefined).css("color", "#4A4A4A")) : (n.attr("type", "password"), $(undefined).css("color", "#9B9B9B"))
                            };
                        return {
                            init:          function () {
                                moduleFactory.registerModule(i, a)
                            }, loginModal: {
                                show: function () {
                                }
                            }
                        }
                    };
                    return {
                        getInstance: function () {
                            return t || (t = r()), t
                        }
                    }
                }(), i = t.getInstance();
                i.init()
            }).call(this)
        }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
    }, {}]
}, {}, [1]);
"use strict";
var $stage = "coral", $gdsUrl = "https://booking.coral.ru", $urlAppendix = "",
    $ascr = "c6cdb0f4ddb8840e8eceeda17cd77073";
(function () {
    function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (h = "function" == typeof require && require, !o && h) return h(f, !0);
                    if (e) return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                s = i[f] = { exports: {} };
                t[f][0].call(s.exports, function (n) {
                    var i = t[f][1][n];
                    return u(i || n)
                }, s, s.exports, n, t, i, r)
            }
            return i[f].exports
        }

        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++) u(r[f]);
        return u
    }

    return n
})()({
    1: [function () {
        (function (n) {
            (function () {
                var t = function () {
                    var i = "footerPartial", t = void 0, r = function () {
                        var t = function (n) {
                            f(n);
                            r();
                            u(n);
                            $(document).ready(function () {
                                e()
                            })
                        }, r = function () {
                            var n = $(".footer-partial"), t = $(".container-bothside span.thisyear", n),
                                i = $(".container-logo-menu .logo-sub-text span.thisyear", n);
                            t.text(moment().format("YYYY"));
                            i.text(moment().format("YYYY"))
                        }, u = function (t) {
                            var r = $(".footermaincontainer", t), i = $(".form-newsletter", r);
                            $(".footer-newsletter-btn-submit").on("click", function (r) {
                                r.preventDefault();
                                var u = $(".footer-newsletter-input").val();
                                u && (n.canvasloader.add($(".form-newsletter", t)), $.ajax({
                                    type:     "post",
                                    url:      "/v1/newsletter/create?mail=" + u,
                                    dataType: "json",
                                    success:  function (r) {
                                        if (r) {
                                            var u = $(".general-message", t),
                                                f = '<div class="general-message success"><i class="material-icons">&#xe86c<\/i>' + i18n_en.partials.footer.subscribeSuccess + "<\/div>";
                                            u.length > 0 ? (u.remove(), $(i).after(f), u.fadeOut()) : ($(i).after(f), u.fadeOut());
                                            n.dataLayerManager.subscription()
                                        }
                                    },
                                    error:    function (n) {
                                        if (n) {
                                            var u = $(".general-message", t),
                                                r = '<div class="general-message error"><i class="material-icons">error<\/i>' + i18n_en.partials.footer.subscribeError + "<\/div>";
                                            u.length > 0 ? ($(".general-message", t).remove(), $(i).after(r), setTimeout(function () {
                                                $(".general-message", t).fadeOut("fast");
                                                setTimeout(function () {
                                                    $(".general-message", t).remove()
                                                }, 210)
                                            }, 2e3)) : ($(i).after(r), setTimeout(function () {
                                                $(".general-message", t).fadeOut("fast");
                                                setTimeout(function () {
                                                    $(".general-message", t).remove()
                                                }, 210)
                                            }, 2e3))
                                        }
                                    },
                                    complete: function () {
                                        n.canvasloader.remove($(".form-newsletter", t))
                                    }
                                }))
                            })
                        }, f = function () {
                        }, e = function () {
                            var n = $(".cookieAgreement"), t = function (n) {
                                for (var r = n + "=", f = decodeURIComponent(document.cookie), u = f.split(";"), t, i = 0; i < u.length; i++) {
                                    for (t = u[i]; t.charAt(0) === " ";) t = t.substring(1);
                                    if (t.indexOf(r) === 0) return t.substring(r.length, t.length)
                                }
                                return ""
                            }, i = function (n, t) {
                                var u = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10,
                                    i = new Date, r;
                                i.setTime(i.getTime() + u * 31536e6);
                                r = "expires=" + i.toUTCString();
                                document.cookie = n + "=" + t + ";" + r + ";path=/"
                            };
                            if (t("coa") === "") {
                                n.removeClass("d-none");
                                $(".btnCookie", n).on("click", function () {
                                    i("coa", 1);
                                    n.slideToggle()
                                })
                            }
                        };
                        return {
                            init:                  function () {
                                moduleFactory.registerModule(i, t)
                            }, samplePublicMethod: function () {
                            }
                        }
                    };
                    return {
                        getInstance: function () {
                            return t || (t = r()), t
                        }
                    }
                }(), i = t.getInstance();
                i.init()
            }).call(this)
        }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
    }, {}]
}, {}, [1])