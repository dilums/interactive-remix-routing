import { NavLink } from "remix";

export default function Structure() {
  return (
    <div className="tree">
      <ul>
        <li>
          <span className="folder">📂 routes</span>
          <ul>
            <li>
              <NavLink to="/">
                <span className="file route">R</span>index.tsx
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <span className="file route">R</span>about.tsx
              </NavLink>
            </li>

            <li>
              <span className="folder">📂 invoices</span>
              <ul>
                <li>
                  <span className="folder">📂 $invoiceId</span>
                  <ul>
                    <li>
                      <span className="folder">📂 activity</span>
                      <ul>
                        <li>
                          <NavLink to="/invoices/5436564/activity/66565">
                            <span className="file route">R</span>$activityId.tsx
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/invoices/5436564/activity/all">
                            <span className="file route">R</span>all.tsx
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/invoices/5436564/activity/latest">
                            <span className="file route">R</span>latest.tsx
                          </NavLink>
                        </li>
                      </ul>
                    </li>


                    <li>
                      <span className="file layout-route">L</span>activity.tsx
                    </li>
                    <li>
                      <NavLink to="/invoices/44353" end>
                        <span className="file route">R</span>index.tsx
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/invoices/44353/details">
                        <span className="file route">R</span>details.tsx
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <span className="file layout-route">L</span>$invoiceId.tsx
                </li>
                <li>
                  <NavLink to="/invoices"  end >
                    <span className="file route">R</span>index.tsx
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <span className="file layout-route">L</span>invoices.tsx
            </li>
            <li>
              <NavLink to="/this/works">
                <span className="file route">R</span>this.works.tsx
              </NavLink>
            </li>

            <li>
              <span className="folder">📂 and.this.works</span>
              <ul>
                <li>
                  <NavLink to="/and/this/works/too">
                    <span className="file route">R</span>too.tsx
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <span className="file layout-route">L</span>and.this.works.tsx
            </li>

            <li>
              <span className="folder">📂 __template-person-list</span>
              <ul>
                <li>
                  <NavLink to="/customers">
                    <span className="file route">R</span>customers.tsx
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/vendors">
                    <span className="file route">R</span>vendors.tsx
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <span className="file layout-route">L</span>
              __template-person-list.tsx
            </li>

            <li>
              <span className="folder">📂splat</span>
              <ul>
                <li>
                  <NavLink to="/splat/match1">
                    <span className="file route">R</span>match1.tsx
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/splat/match2">
                    <span className="file route">R</span>match2.tsx
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/splat/something-random">
                    <span className="file route">R</span>$.tsx
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <span className="file layout-route">L</span>
              splat.tsx
            </li>

            <li>
              <span className="folder">📂 posts</span>
              <ul>
                <li>
                  <NavLink to="/posts/markdown">
                    <span className="file route">R</span>markdown.md
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/posts/MDX">
                    <span className="file route">R</span>MDX.mdx
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <span className="file layout-route">L</span>posts.tsx
            </li>

            <li>
              <span className="folder">📂 reports</span>
              <ul>
                <li>
                  <a href="/reports/2021-12-10.csv">
                    <span className="file route">R</span>$date[.csv].ts
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <span className="folder">📂 some-list</span>
              <ul>
                <li>
                  <NavLink to="/some-list/grid-view">
                    <span className="file route">R</span>grid-view.tsx
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/some-list/list-view">
                    <span className="file route">R</span>list-view.tsx
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <span className="file layout-route">L</span>some-list.tsx
            </li>

            <li>
              <span className="folder">📂 errors</span>
              <ul>
                <li>
                  <NavLink to="/errors/good">
                    <span className="file route">R</span>good.tsx
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/errors/bad">
                    <span className="file route">R</span>bad.tsx
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <span className="file layout-route">L</span>errors.tsx
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
