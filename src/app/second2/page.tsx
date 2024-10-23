import styles from "./second2.module.scss";
import Card from "./_component/card";

export default function Page() {
  return (
    <>
      <header className="py-4 px-2 my-0 mx-auto">
        <nav>
          {/* top nav */}
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="text-muted">
              Subscribe
            </a>
            <a href="#" className="h1">
              <h2 id="logo">Large</h2>
            </a>

            <div>
              <a href=""></a>
              <button className="btn btn-sm btn-outline-secondary">
                Sign up
              </button>
            </div>
          </div>
        </nav>
        <hr className="m-0" />
        {/* bottom nav */}
        <nav className=" py-1 mb-2 overflow-y-hidden">
          <div
            className=" d-flex justify-content-between  overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <a className="p-2 text-muted" href="#">
              World
            </a>
            <a className="p-2 text-muted" href="#">
              U.S.
            </a>
            <a className="p-2 text-muted" href="#">
              Technology
            </a>
            <a className="p-2 text-muted" href="#">
              Design
            </a>
            <a className="p-2 text-muted" href="#">
              Culture
            </a>
            <a className="p-2 text-muted" href="#">
              Business
            </a>
            <a className="p-2 text-muted" href="#">
              Politics
            </a>
            <a className="p-2 text-muted" href="#">
              Opinion
            </a>
            <a className="p-2 text-muted" href="#">
              Science
            </a>
            <a className="p-2 text-muted" href="#">
              Health
            </a>
            <a className="p-2 text-muted" href="#">
              Style
            </a>
            <a className="p-2 text-muted" href="#">
              Travel
            </a>
          </div>
        </nav>
      </header>
      {/* section two */}
      <section>
        <div className="text-start bg-dark mb-4">
          <div className="p-4 " style={{ maxWidth: "400px" }}>
            <h1 className="text-white">Title of a longer featured blog post</h1>
            <p className="text-white">
              {
                "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."
              }
            </p>
            <a href="#" className="text-whites">
              Continue reading...
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-between flex-wrap gap-4">
          <Card
            type="World"
            date="Nov 12"
            title="Featured post"
            typeStyle="text-primary"
          />
          <Card
            type="Design"
            date="Nov 11"
            title="Post title"
            typeStyle="text-danger"
          />
        </div>
      </section>
      {/* section three */}

      <main className=" mt-4  d-flex justify-content-between  flex-wrap  ">
        <div className="col-md-8">
          <article>
            <h3 className="fw-lighter"> From the Firehose</h3>
            <hr />
            <h2>Sample blog post</h2>
            <p className="text-muted">
              January 1, 2014 by <a href="#">Mark</a>
            </p>
            <p>
              This blog post shows a few different types of content that
              `&apos;`s supported and styled with Bootstrap. Basic typography,
              images, and code are all supported.
            </p>
            <hr />
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
              sem lacinia quam venenatis vestibulum. Sed posuere consectetur est
              at lobortis. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              Curabitur blandit tempus porttitor. Nullam quis risus eget urna
              mollis ornare vel eu leo. Nullam id dolor id nibh ultricies
              vehicula ut id elit.
            </p>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </p>
            <h2>Heading</h2>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <h3>Sub-heading</h3>

            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
            <code>Example code block</code>
            <p className="mt-3">
              Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
              malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa.
            </p>

            <h3>Sub-heading</h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus.
            </p>

            <ul>
              <li>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et.
              </li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>

            <p>
              Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
              elit libero, a pharetra augue.
            </p>

            <ol>
              <li>Vestibulum id ligula porta felis euismod semper.</li>
              <li>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </li>
              <li>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </li>
            </ol>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Sed posuere
              consectetur est at lobortis.
            </p>
          </article>

          <article>
            <h2 className="mt-5">Another blog post</h2>
            <p className="text-muted">
              December 23, 2013 by <a href="#">Jacob</a>
            </p>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
              sem lacinia quam venenatis vestibulum. Sed posuere consectetur est
              at lobortis. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              Curabitur blandit tempus porttitor. Nullam quis risus eget urna
              mollis ornare vel eu leo. Nullam id dolor id nibh ultricies
              vehicula ut id elit.
            </p>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </p>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </article>

          <article>
            <h2 className="mt-5">New feature</h2>
            <p className="text-muted">
              December 14, 2013 by <a href="#">Chris</a>
            </p>

            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus.
            </p>
            <ul>
              <li>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et.
              </li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </p>
            <p>
              Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
              elit libero, a pharetra augue.
            </p>

            <a href="#" className="btn btn-outline-primary mb-4">
              Older
            </a>
            <a
              href="#"
              className="btn btn-outline-secondary disabled mb-4 ms-2 "
            >
              Newer
            </a>
          </article>
        </div>

        <aside className={styles.sidebar}>
          <div className="bg-light p-3">
            <h4>About</h4>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </p>
          </div>
          <div className="my-3 p-3">
            <h4>Archives</h4>
            <ol className="list-unstyled">
              <li>
                <a href="#">March 2014</a>
              </li>
              <li>
                <a href="#">February 2014</a>
              </li>
              <li>
                <a href="#">January 2014</a>
              </li>
              <li>
                <a href="#">December 2013</a>
              </li>
              <li>
                <a href="#">November 2013</a>
              </li>
              <li>
                <a href="#">October 2013</a>
              </li>
              <li>
                <a href="#">September 2013</a>
              </li>
              <li>
                <a href="#">August 2013</a>
              </li>
              <li>
                <a href="#">July 2013</a>
              </li>
              <li>
                <a href="#">June 2013</a>
              </li>
              <li>
                <a href="#">May 2013</a>
              </li>
              <li>
                <a href="#">April 2013</a>
              </li>
            </ol>
          </div>
          <div className="p-3">
            <h4>Elsewhere</h4>
            <ol className="list-unstyled">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ol>
          </div>
        </aside>
      </main>

      <footer
        className="text-center text-black py-5  mx-auto"
        style={{ backgroundColor: "#f9f9f9", width: "100%" }}
      >
        <p>
          Blog template built for
          <a href="https://getbootstrap.com/" className="px-1">
            Bootstrap
          </a>
          by
          <a href="https://twitter.com/mdo" className="px-1">
            @mdo.
          </a>
        </p>
        <a href="#logo" className="text-muted">
          Back To Top
        </a>
      </footer>
    </>
  );
}
