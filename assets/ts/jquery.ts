import "jquery";
import "fitvids";

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
  }
}

export function initializeJQuery($: JQueryStatic): void {
  $(document).ready(function () {
    // Mobile Menu Trigger
    $(".gh-burger").on("click", function () {
      $("body").toggleClass("gh-head-open");
    });

    // FitVids - Makes video embeds responsive
    ($(".gh-content") as any).fitVids();
  });
}
