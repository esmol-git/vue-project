import { ref } from "vue";
import { defineStore } from "pinia";
export const useIconsStore = defineStore("icons", () => {
  const icons = ref([
    { icon: "airplay" },
    { icon: "anchor" },
    { icon: "angle" },
    { icon: "archive" },
    { icon: "arrow-chevron-horizontal" },
    { icon: "arrow-chevron-left" },
    { icon: "arrow-circle-left" },
    { icon: "arrow-down" },
    { icon: "arrow-export" },
    { icon: "arrow-left" },
    { icon: "arrow-left-to-line" },
    { icon: "arrow-log-in" },
    { icon: "arrow-log-out" },
    { icon: "arrow-right" },
    { icon: "arrow-share" },
    { icon: "arrow-trending-up" },
    { icon: "arrow-up" },
    { icon: "asterisk-1" },
    { icon: "asterisk-2" },
    { icon: "award" },
    { icon: "bank" },
    { icon: "bar-chart-horizontal" },
    { icon: "bar-chart-vertical" },
    { icon: "battery" },
    { icon: "bell" },
    { icon: "bell-2" },
    { icon: "book" },
    { icon: "bookmark" },
    { icon: "bubble-chart" },
    { icon: "building" },
    { icon: "bulleted-list" },
    { icon: "calendar" },
    { icon: "cam-2" },
    { icon: "capsule" },
    { icon: "card-search" },
    { icon: "card-shield" },
    { icon: "cart" },
    { icon: "check" },
    { icon: "circle" },
    { icon: "circle-check" },
    { icon: "circle-close-multiply" },
    { icon: "circle-exclamation-mark" },
    { icon: "circle-information" },
    { icon: "circle-minus" },
    { icon: "circle-plus" },
    { icon: "circle-question-mark" },
    { icon: "clock" },
    { icon: "combine" },
    { icon: "community" },
    { icon: "component" },
    { icon: "connected-arrow" },
    { icon: "contrast" },
    { icon: "copy" },
    { icon: "coupon" },
    { icon: "cpu" },
    { icon: "credit-card" },
    { icon: "crop" },
    { icon: "crown-vip" },
    { icon: "desk-lamp" },
    { icon: "diamond-vip" },
    { icon: "distribute-spacing-horizontal" },
    { icon: "donut-chart" },
    { icon: "drag-move" },
    { icon: "drop" },
    { icon: "dropdown" },
    { icon: "edit" },
    { icon: "exclude" },
    { icon: "face-angry" },
    { icon: "face-happy" },
    { icon: "face-neutral" },
    { icon: "face-sad" },
    { icon: "female" },
    { icon: "file" },
    { icon: "file-check" },
    { icon: "file-close" },
    { icon: "file-minus" },
    { icon: "file-plus" },
    { icon: "filter" },
    { icon: "flag" },
    { icon: "flare" },
    { icon: "focus" },
    { icon: "folder" },
    { icon: "folder-check" },
    { icon: "folder-close" },
    { icon: "folder-minus" },
    { icon: "folder-plus" },
    { icon: "gift" },
    { icon: "global" },
    { icon: "graph" },
    { icon: "grid" },
    { icon: "heart" },
    { icon: "hexagon" },
    { icon: "home-1" },
    { icon: "home-2" },
    { icon: "home-3" },
    { icon: "home-4" },
    { icon: "honour" },
    { icon: "hospital" },
    { icon: "hotel" },
    { icon: "image" },
    { icon: "inbox" },
    { icon: "input-field" },
    { icon: "intersect" },
    { icon: "layout" },
    { icon: "layout-grid" },
    { icon: "links" },
    { icon: "lock" },
    { icon: "magic" },
    { icon: "mail" },
    { icon: "mail-add" },
    { icon: "mail-check" },
    { icon: "mail-close" },
    { icon: "mail-open" },
    { icon: "mail-send" },
    { icon: "mail-unread" },
    { icon: "male" },
    { icon: "map" },
    { icon: "map-pin-1" },
    { icon: "map-pin-2" },
    { icon: "map-pin-3" },
    { icon: "map-pin-4" },
    { icon: "medal" },
    { icon: "medal-2" },
    { icon: "menu-1" },
    { icon: "menu-2" },
    { icon: "menu-3" },
    { icon: "menu-fold" },
    { icon: "menu-unfold" },
    { icon: "message-1" },
    { icon: "message-2" },
    { icon: "message-3" },
    { icon: "message-check" },
    { icon: "message-plus" },
    { icon: "mic" },
    { icon: "mic-off" },
    { icon: "money" },
    { icon: "monitor" },
    { icon: "moon-1" },
    { icon: "more-horizontal" },
    { icon: "more-horizontal" },
    { icon: "paper-clip" },
    { icon: "passport" },
    { icon: "pentagon" },
    { icon: "phone" },
    { icon: "pie-chart" },
    { icon: "pie-chart-2" },
    { icon: "play" },
    { icon: "position" },
    { icon: "power" },
    { icon: "price-tag" },
    { icon: "printer" },
    { icon: "pulse" },
    { icon: "qr-scan" },
    { icon: "quote-1" },
    { icon: "quote-2" },
    { icon: "reports" },
    { icon: "rest-time" },
    { icon: "rhombus" },
    { icon: "search" },
    { icon: "search-field" },
    { icon: "send-1" },
    { icon: "send-2" },
    { icon: "server" },
    { icon: "settings-1" },
    { icon: "settings-2" },
    { icon: "settings-slider" },
    { icon: "shape" },
    { icon: "shopping-bag" },
    { icon: "sim-card" },
    { icon: "slideshow" },
    { icon: "sort-ascending" },
    { icon: "sort-by" },
    { icon: "sort-descending" },
    { icon: "spacing-height" },
    { icon: "spacing-width" },
    { icon: "square" },
    { icon: "stack" },
    { icon: "star" },
    { icon: "stock" },
    { icon: "task" },
    { icon: "timer" },
    { icon: "toggle-left" },
    { icon: "trash" },
    { icon: "tree" },
    { icon: "triangle" },
    { icon: "unlock" },
    { icon: "user" },
    { icon: "user-check" },
    { icon: "user-close" },
    { icon: "user-minus" },
    { icon: "user-plus" },
    { icon: "video" },
    { icon: "video-off" },
    { icon: "volume-high" },
    { icon: "volume-low" },
    { icon: "volume-off" },
    { icon: "wallet" },
    { icon: "zoom-in" },
    { icon: "zoom-out" },
  ]);

  return {
    icons,
  };
});