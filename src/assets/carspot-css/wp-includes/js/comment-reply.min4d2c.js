window.addComment = (function(a) {
  function b() {
    c(), g();
  }
  function c(a) {
    if (t && ((m = j(r.cancelReplyId)), (n = j(r.commentFormId)), m)) {
      m.addEventListener("touchstart", e), m.addEventListener("click", e);
      for (var b, c = d(a), g = 0, h = c.length; g < h; g++)
        (b = c[g]),
          b.addEventListener("touchstart", f),
          b.addEventListener("click", f);
    }
  }
  function d(a) {
    var b,
      c = r.commentReplyClass;
    return (
      (a && a.childNodes) || (a = q),
      (b = q.getElementsByClassName
        ? a.getElementsByClassName(c)
        : a.querySelectorAll("." + c))
    );
  }
  function e(a) {
    var b = this,
      c = r.temporaryFormId,
      d = j(c);
    d &&
      o &&
      ((j(r.parentIdFieldId).value = "0"),
      d.parentNode.replaceChild(o, d),
      (b.style.display = "none"),
      a.preventDefault());
  }
  function f(b) {
    var c,
      d = this,
      e = i(d, "belowelement"),
      f = i(d, "commentid"),
      g = i(d, "respondelement"),
      h = i(d, "postid");
    e &&
      f &&
      g &&
      h &&
      ((c = a.addComment.moveForm(e, f, g, h)), !1 === c && b.preventDefault());
  }
  function g() {
    if (s) {
      var a = { childList: !0, subTree: !0 };
      (p = new s(h)), p.observe(q.body, a);
    }
  }
  function h(a) {
    for (var b = a.length; b--; ) if (a[b].addedNodes.length) return void c();
  }
  function i(a, b) {
    return u ? a.dataset[b] : a.getAttribute("data-" + b);
  }
  function j(a) {
    return q.getElementById(a);
  }
  function k(b, c, d, e) {
    var f = j(b);
    o = j(d);
    var g,
      h,
      i,
      k = j(r.parentIdFieldId),
      p = j(r.postIdFieldId);
    if (f && o && k) {
      l(o),
        e && p && (p.value = e),
        (k.value = c),
        (m.style.display = ""),
        f.parentNode.insertBefore(o, f.nextSibling),
        (m.onclick = function() {
          return !1;
        });
      try {
        for (var s = 0; s < n.elements.length; s++)
          if (
            ((g = n.elements[s]),
            (h = !1),
            "getComputedStyle" in a
              ? (i = a.getComputedStyle(g))
              : q.documentElement.currentStyle && (i = g.currentStyle),
            ((g.offsetWidth <= 0 && g.offsetHeight <= 0) ||
              "hidden" === i.visibility) &&
              (h = !0),
            "hidden" !== g.type && !g.disabled && !h)
          ) {
            g.focus();
            break;
          }
      } catch (t) {}
      return !1;
    }
  }
  function l(a) {
    var b = r.temporaryFormId,
      c = j(b);
    c ||
      ((c = q.createElement("div")),
      (c.id = b),
      (c.style.display = "none"),
      a.parentNode.insertBefore(c, a));
  }
  var m,
    n,
    o,
    p,
    q = a.document,
    r = {
      commentReplyClass: "comment-reply-link",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID"
    },
    s = a.MutationObserver || a.WebKitMutationObserver || a.MozMutationObserver,
    t = "querySelector" in q && "addEventListener" in a,
    u = !!q.documentElement.dataset;
  return (
    t && "loading" !== q.readyState
      ? b()
      : t && a.addEventListener("DOMContentLoaded", b, !1),
    { init: c, moveForm: k }
  );
})(window);
