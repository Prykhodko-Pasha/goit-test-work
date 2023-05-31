(this['webpackJsonpgoit-react-hw-07-phonebook'] =
  this['webpackJsonpgoit-react-hw-07-phonebook'] || []).push([
  [0],
  {
    19: function (t, e, n) {
      t.exports = {
        section: 'Section_section__MKWlW',
        section__title: 'Section_section__title__qm4ZY',
      };
    },
    20: function (t, e, n) {
      t.exports = {
        form: 'Form_form__1mCBA',
        form__btn: 'Form_form__btn__3I_SY',
      };
    },
    21: function (t, e, n) {
      t.exports = {
        lds_wrapper: 'Loader_lds_wrapper__3XSeh',
        lds_default: 'Loader_lds_default__132F7',
      };
    },
    37: function (t, e, n) {},
    64: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(1),
        c = n.n(r),
        a = n(14),
        o = n.n(a),
        s = (n(37), n(3)),
        u = n(19),
        i = n.n(u),
        l = n(0);
      function b(t) {
        var e = t.title,
          n = t.children;
        return Object(l.jsxs)('div', {
          className: i.a.section,
          children: [
            Object(l.jsx)('h2', { className: i.a.section__title, children: e }),
            n,
          ],
        });
      }
      var j = n(22),
        d = n(20),
        p = n.n(d),
        f = n(4),
        O = n.n(f),
        h = n(9),
        _ = n(2),
        m = Object(_.b)('Phonebook/changeFilter'),
        x = Object(_.b)('Phonebook/fetchUsers'),
        v = Object(_.b)('Phonebook/updUser'),
        w = Object(_.b)('Phonebook/delUser'),
        g = n(11),
        y = n.n(g);
      function k() {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = Object(h.a)(
          O.a.mark(function t() {
            var e, n;
            return O.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), y.a.get('/users');
                  case 2:
                    return (e = t.sent), (n = e.data), t.abrupt('return', n);
                  case 5:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function N(t, e) {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = Object(h.a)(
          O.a.mark(function t(e, n) {
            var r, c, a;
            return O.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = { name: e, phone: n }),
                      (t.next = 3),
                      y.a.post('/users', r)
                    );
                  case 3:
                    return (c = t.sent), (a = c.data), t.abrupt('return', a);
                  case 6:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function S(t) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = Object(h.a)(
          O.a.mark(function t(e) {
            return O.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), y.a.delete('/users/'.concat(e));
                  case 2:
                    return t.abrupt('return', e);
                  case 3:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      y.a.defaults.baseURL =
        'https://6191a09a41928b00176900d3.mockapi.io/phonebook';
      var A = Object(_.c)(
          x,
          Object(h.a)(
            O.a.mark(function t() {
              var e;
              return O.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), k();
                    case 2:
                      return (e = t.sent), t.abrupt('return', e);
                    case 4:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          ),
        ),
        z = Object(_.c)(
          v,
          (function () {
            var t = Object(h.a)(
              O.a.mark(function t(e) {
                var n, r, c;
                return O.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.name), (r = e.phone), (t.next = 3), N(n, r)
                        );
                      case 3:
                        return (
                          (c = t.sent), console.log(c), t.abrupt('return', c)
                        );
                      case 6:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        P = Object(_.c)(
          w,
          (function () {
            var t = Object(h.a)(
              O.a.mark(function t(e) {
                var n;
                return O.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), S(e);
                      case 2:
                        return (n = t.sent), t.abrupt('return', n);
                      case 4:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        q = n(15),
        Z = function (t) {
          return t.users.entities;
        },
        B = function (t) {
          return t.users.filter;
        },
        E = function (t) {
          return t.users.isLoading;
        },
        J = Object(q.a)([Z, B], function (t, e) {
          return t.filter(function (t) {
            return t.name.toLowerCase().includes(e);
          });
        });
      function M() {
        var t = Object(r.useState)(''),
          e = Object(j.a)(t, 2),
          n = e[0],
          c = e[1],
          a = Object(r.useState)(''),
          o = Object(j.a)(a, 2),
          u = o[0],
          i = o[1],
          b = Object(s.c)(Z),
          d = Object(s.b)(),
          f = function (t) {
            var e = t.currentTarget,
              n = e.name,
              r = e.value;
            switch (n) {
              case 'name':
                c(r);
                break;
              case 'phone':
                i(r);
                break;
              default:
                return;
            }
          },
          O = function () {
            c(''), i('');
          };
        return Object(l.jsxs)('form', {
          className: p.a.form,
          onSubmit: function (t) {
            t.preventDefault(),
              0 ===
              b.filter(function (t) {
                return t.name.toLowerCase() === n.toLowerCase();
              }).length
                ? d(z({ name: n, phone: u }))
                : alert(''.concat(n, ' is already in users.')),
              O();
          },
          children: [
            Object(l.jsx)('label', {
              children: Object(l.jsx)('input', {
                type: 'text',
                name: 'name',
                placeholder: 'Name',
                value: n,
                onChange: f,
                pattern:
                  "^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",
                title:
                  "\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",
                required: !0,
              }),
            }),
            Object(l.jsx)('br', {}),
            Object(l.jsx)('label', {
              children: Object(l.jsx)('input', {
                type: 'tel',
                name: 'phone',
                placeholder: 'Number',
                value: u,
                onChange: f,
                pattern:
                  '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
                title:
                  '\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +',
                required: !0,
              }),
            }),
            Object(l.jsx)('button', {
              className: p.a.form__btn,
              type: 'submit',
              children: 'Add contact',
            }),
          ],
        });
      }
      var X = n(7),
        D = n.n(X);
      function G(t) {
        var e = t.id,
          n = t.name,
          r = t.phone,
          c = Object(s.b)();
        return Object(l.jsxs)(l.Fragment, {
          children: [
            Object(l.jsxs)('p', { children: [n, ': ', r] }),
            Object(l.jsx)('button', {
              className: D.a.del__btn,
              type: 'button',
              onClick: function () {
                return c(P(e));
              },
              children: 'Delete',
            }),
          ],
        });
      }
      function I() {
        var t = Object(s.c)(J);
        return Object(l.jsx)('ul', {
          className: D.a.users__list,
          children: t.map(function (t) {
            var e = t.id,
              n = t.name,
              r = t.phone;
            return Object(l.jsx)(
              'li',
              {
                className: D.a.users__item,
                children: Object(l.jsx)(G, { id: e, name: n, phone: r }),
              },
              e,
            );
          }),
        });
      }
      function R() {
        var t = Object(s.c)(B),
          e = Object(s.b)();
        return Object(l.jsx)('label', {
          className: D.a.wrapper,
          children: Object(l.jsx)('input', {
            placeholder: 'Find users by name',
            type: 'text',
            value: t,
            onChange: function (t) {
              return e(m(t.target.value.toLowerCase()));
            },
          }),
        });
      }
      var U = n(21),
        W = n.n(U);
      function Y() {
        return Object(l.jsx)('div', {
          className: W.a.lds_wrapper,
          children: Object(l.jsxs)('div', {
            className: W.a.lds_default,
            children: [
              Object(l.jsx)('div', {}),
              Object(l.jsx)('div', {}),
              Object(l.jsx)('div', {}),
            ],
          }),
        });
      }
      function K() {
        var t = Object(s.c)(Z),
          e = Object(s.c)(E),
          n = Object(s.b)();
        return (
          Object(r.useEffect)(
            function () {
              return n(A());
            },
            [n],
          ),
          Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)(b, {
                title: 'Phonebook',
                children: Object(l.jsx)(M, {}),
              }),
              Object(l.jsx)(b, {
                title: 'Users',
                children: e
                  ? Object(l.jsx)(Y, {})
                  : t.length > 0
                  ? Object(l.jsxs)(l.Fragment, {
                      children: [
                        t.length > 1 && Object(l.jsx)(R, {}),
                        Object(l.jsx)(I, {}),
                      ],
                    })
                  : Object(l.jsx)('div', {
                      className: D.a.wrapper,
                      children: Object(l.jsx)('p', {
                        className: D.a.text,
                        children: 'No users yet',
                      }),
                    }),
              }),
            ],
          })
        );
      }
      var Q,
        T,
        $,
        H = n(5),
        V = n(32),
        tt = n(8),
        et = Object(_.d)(
          [],
          ((Q = {}),
          Object(H.a)(Q, A.fulfilled, function (t, e) {
            return e.payload;
          }),
          Object(H.a)(Q, z.fulfilled, function (t, e) {
            var n = e.payload;
            return [].concat(Object(V.a)(t), [n]);
          }),
          Object(H.a)(Q, P.fulfilled, function (t, e) {
            var n = e.payload;
            return t.filter(function (t) {
              return t.id !== n;
            });
          }),
          Q),
        ),
        nt = Object(_.d)(
          !1,
          ((T = {}),
          Object(H.a)(T, A.pending, function () {
            return !0;
          }),
          Object(H.a)(T, A.fulfilled, function () {
            return !1;
          }),
          Object(H.a)(T, A.rejected, function () {
            return !1;
          }),
          T),
        ),
        rt = Object(_.d)(
          '',
          Object(H.a)({}, m, function (t, e) {
            return e.payload;
          }),
        ),
        ct = Object(_.d)(
          null,
          (($ = {}),
          Object(H.a)($, A.rejected, function (t, e) {
            return e.payload;
          }),
          Object(H.a)($, A.pending, function () {
            return null;
          }),
          Object(H.a)($, z.rejected, function (t, e) {
            return e.payload;
          }),
          Object(H.a)($, z.pending, function () {
            return null;
          }),
          Object(H.a)($, P.rejected, function (t, e) {
            return e.payload;
          }),
          Object(H.a)($, P.pending, function () {
            return null;
          }),
          $),
        ),
        at = Object(tt.b)({
          entities: et,
          isLoading: nt,
          filter: rt,
          error: ct,
        }),
        ot = Object(_.a)({ reducer: { users: at } });
      o.a.render(
        Object(l.jsx)(c.a.StrictMode, {
          children: Object(l.jsx)(s.a, {
            store: ot,
            children: Object(l.jsx)(K, {}),
          }),
        }),
        document.getElementById('root'),
      );
    },
    7: function (t, e, n) {
      t.exports = {
        wrapper: 'Users_wrapper__XSqRz',
        users__list: 'Users_users__list__2X1Qj',
        users__item: 'Users_users__item__cCGUk',
        text: 'Users_text__2Ghv_',
        del__btn: 'Users_del__btn__3dEve',
      };
    },
  },
  [[64, 1, 2]],
]);
//# sourceMappingURL=main.31b3ef8f.chunk.js.map
