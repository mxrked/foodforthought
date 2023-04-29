/**
 *
 *  This is used to change the behavior of certain page link(s)
 *
 */

export default function ManipPageLink(manipState, amountType, linkClass) {
  if (manipState == "enable") {
    if (amountType == "single") {
      document.querySelector(linkClass).style.opacity = 1;
      document.querySelector(linkClass).style.pointerEvents = "auto";
    }

    if (amountType == "multiple") {
      document.querySelectorAll(linkClass).forEach((link) => {
        link.style.opacity = 1;
        link.style.pointerEvents = "auto";
      });
    }
  }

  if (manipState == "disable") {
    if (amountType == "single") {
      document.querySelector(linkClass).style.opacity = 0.5;
      document.querySelector(linkClass).style.pointerEvents = "none";
    }

    if (amountType == "multiple") {
      document.querySelectorAll(linkClass).forEach((link) => {
        link.style.opacity = 0.5;
        link.style.pointerEvents = "none";
      });
    }
  }
}
