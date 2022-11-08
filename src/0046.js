/*
  0045.js
  Design some question for a quiz
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221109
  0549 Finish, move to CodePend and GitHub.
  20221108
  1928 Start it for [1].
  
  refs
  1. url https://edunex.itb.ac.id/courses/40542/preview/131311/58160 [20221108].
*/


main();


function main() {
  var N =  10;
  
  for(var i = 0; i < N; i++) {
    var q = questions(i);
    var d = document.createElement("div");
    d.style.border = "2px solid #fff";
    d.style.fontFamily = "monospace";
    d.style.whiteSpace = "pre";
    d.style.background = "#777";
    d.style.color = "#eee";
    d.style.padding = "5px 15px";
    d.innerHTML = q;
    document.body.append(d);
  }
}


function questions(n) {
  var str;
  switch(n) {
    case 0:
      str = "<x style='color:#8f8;'>00</x> <x style='color:#ff8;'>User</x>\n";
      str += "Name   \"..\"\n";
      str += "NIM    \"..\"\n";
      str += "GitHub \"..\"\n";
    break;
    case 1:
      str = "<x style='color:#8f8;'>01</x> <x style='color:#ff8;'>Team</x> (fill Leader with \"1\" or \"0\")\n";
      str += "Members\n";
      str += "  Name   \"..\"\n";
      str += "  NIM    \"..\"\n";
      str += "  GitHub \"..\"\n";
      str += "  Leader \"..\"\n";
      str += "\n";
      str += "  Name   \"..\"\n";
      str += "  NIM    \"..\"\n";
      str += "  GitHub \"..\"\n";
      str += "  Leader \"..\"\n";
      str += "\n";
      str += "  Name   \"..\"\n";
      str += "  NIM    \"..\"\n";
      str += "  GitHub \"..\"\n";
      str += "  Leader \"..\"\n";
      str += "\n";
      str += "  Name   \"..\"\n";
      str += "  NIM    \"..\"\n";
      str += "  GitHub \"..\"\n";
      str += "  Leader \"..\"\n";
      str += "\n";
      str += "  Name   \"..\"\n";
      str += "  NIM    \"..\"\n";
      str += "  GitHub \"..\"\n";
      str += "  Leader \"..\"\n";
    break;
    case 2:
      str = "<x style='color:#8f8;'>02</x> <x style='color:#ff8;'>RBL Project</x>\n";
      str += "Title    \"..\"\n";
      str += "Topics   \"..\"\n";
      str += "Keywords \"..\", \"..\", \"..\", \"..\", \"..\"\n";
    break;
    case 3:
      str = "<x style='color:#8f8;'>03</x> <x style='color:#ff8;'>Theory</x>\n";
      str += "Theory_1 \"..\"\n";
      str += "Theory_2 \"..\"\n";
      str += "Theory_3 \"..\"\n";
      str += "Theory_4 \"..\"\n";
      str += "Theory_5 \"..\"\n";
    break;
    case 4:
      str = "<x style='color:#8f8;'>04</x> <x style='color:#ff8;'>Numerical Methods</x>\n";
      str += "Method_1 \"..\"\n";
      str += "Method_2 \"..\"\n";
      str += "Method_3 \"..\"\n";
      str += "Method_4 \"..\"\n";
      str += "Method_5 \"..\"\n";
    break;
    case 5:
      str = "<x style='color:#8f8;'>05</x> <x style='color:#ff8;'>Programming Language</x>\n";
      str += "Languange_1 \"..\"\n";
      str += "Languange_2 \"..\"\n";
      str += "Languange_3 \"..\"\n";
      str += "Languange_4 \"..\"\n";
      str += "Languange_5 \"..\"\n";
    break;
    case 6:
      str = "<x style='color:#8f8;'>06</x> <x style='color:#ff8;'>Analysis Method</x>\n";
      str += "Analysis_1 \"..\"\n";
      str += "Analysis_2 \"..\"\n";
      str += "Analysis_3 \"..\"\n";
      str += "Analysis_4 \"..\"\n";
      str += "Analysis_5 \"..\"\n";
    break;
    case 7:
      str = "<x style='color:#8f8;'>07</x> <x style='color:#ff8;'>Codes and Softwares</x>\n";
      str += "Create own program \"..\"\n";
      str += "URL_1              \"..\"\n";
      str += "Adapt from others  \"..\"\n";
      str += "URL_2a             \"..\"\n";
      str += "URL_2b             \"..\"\n";
      str += "URL_2c             \"..\"\n";
      str += "URL_2d             \"..\"\n";
      str += "Using softwares    \"..\"\n";
      str += "URL_3a             \"..\"\n";
      str += "URL_3b             \"..\"\n";
      str += "URL_3c             \"..\"\n";
      str += "URL_3d             \"..\"\n";
    break;
    case 8:
      str = "<x style='color:#8f8;'>08</x> <x style='color:#ff8;'>Report Sections</x> (fill with \"1\" or \"0\")\n";
      str += "Abstract             \"..\"\n";
      str += "Introduction         \"..\"\n";
      str += "Methods              \"..\"\n";
      str += "Results              \"..\"\n";
      str += "Discussion           \"..\"\n";
      str += "Conclusion           \"..\"\n";
      str += "Appendix (Flowchart) \"..\"\n";
      str += "Appendix (Code)      \"..\"\n";
      str += "Appendix (Video)     \"..\"\n";
    break;
    case 9:
      str = "<x style='color:#8f8;'>09</x> <x style='color:#ff8;'>Presentation</x> (fill with \"1\" or \"0\", can more than one choices)\n";
      str += "In class              \"..\"\n";
      str += "YouTube               \"..\"\n";
      str += "GitHub                \"..\"\n";
      str += "Zenodo                \"..\"\n";
      str += "Open Sciece Framework \"..\"\n";
      str += "Google Drive          \"..\"\n";
      str += "Scribd                \"..\"\n";
      str += "Others                \"..\"\n";
    break;
    default:
      str = "&nbsp;";
    break;
  }
  return str;
}