// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["Video"] = "video";
    TypesOfMedia["Audio"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["Mp4"] = ".mp4";
    FormatsOfMedia["Mov"] = ".mov";
    FormatsOfMedia["Mkv"] = ".mkv";
    FormatsOfMedia["Flv"] = ".flv";
    FormatsOfMedia["WebM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia(_a) {
    var _b =
            _a === void 0
                ? {
                      name: "example",
                      type: TypesOfMedia.Video,
                      format: FormatsOfMedia.Mp4,
                  }
                : _a,
        name = _b.name,
        type = _b.type,
        format = _b.format,
        subtitles = _b.subtitles,
        marks = _b.marks;
    var marksLog;
    if (Array.isArray(marks)) {
        marksLog = marks.join(" ");
    } else if (typeof marks === "string") {
        marksLog = marks;
    } else {
        marksLog = "Unsupported type of marks";
    }
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    console.log(
        "Media "
            .concat(name)
            .concat(format, " is ")
            .concat(type, "\n    Marks: ")
            .concat(marksLog, "\n    Subtitles: ")
            .concat(
                subtitles !== null && subtitles !== void 0 ? subtitles : "none"
            )
    );
    // помните что это за оператор ??
    return "Media started";
}
playMedia({
    name: "WoW",
    format: FormatsOfMedia.Mov,
    type: TypesOfMedia.Video,
    subtitles: "Hello World!",
    marks: ["4:30", "5:40"],
});
