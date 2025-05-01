// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

enum TypesOfMedia {
    Video = "video",
    Audio = "audio",
}

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

enum FormatsOfMedia {
    Mp4 = ".mp4",
    Mov = ".mov",
    Mkv = ".mkv",
    Flv = ".flv",
    WebM = ".webM",
}

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа

interface MediaProps {
    name: string;
    type: TypesOfMedia;
    format: FormatsOfMedia;
    subtitles?: string;
    marks?: unknown;
}

function playMedia(
    { name, type, format, subtitles, marks }: MediaProps = {
        name: "example",
        type: TypesOfMedia.Video,
        format: FormatsOfMedia.Mp4,
    }
): string {
    let marksLog;

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

    console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
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

// --- ЗАДАЧА ВЫПОЛНЕНА --- \\

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
