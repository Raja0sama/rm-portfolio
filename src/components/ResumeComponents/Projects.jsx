export function Projects() {
  return (
    <div className={"flex mt-10 "}>
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
        className={"pt-10 text-xl flex justify-center"}
      >
        <span className={"tracking-widest"}>PROJECTS</span>
      </div>
      <div>
        <div className={"px-10 pt-5"}>
          <p className={"text-gray-100	text-lg font-extralight	"}>
            React-native foreground Service -
          </p>
          <p className={"text-gray-400	text-basic font-extralight	"}>
            RN-foreground-service let you run an un-killable headless task for
            react native, It is the most extensive kind of foreground service
            for react native in the market that has features like multi-task
            running from a single headless task, notification control such as
            buttons and on notification click handle, also let you update the
            notification on the go. It was designed while I was developing an
            uber application https://waterlink.pk/ for water tanker supply and
            needed a headless task running even if the app is killed, therefore
            the solution was to create a foreground service in android which is
            an un-killable notification keeping an instance of your application
            alive, therefore headless
          </p>
        </div>
        <div className={"px-10 pt-5"}>
          <p className={"text-gray-100	text-lg font-extralight	"}>WOOSHOP - </p>
          <p className={"text-gray-400	text-basic font-extralight	"}>
            Created open-source project e-commerce based project created with
            React-native, Graph-QL, and woo-commerce. It was developed as a
            showcase application so that I can show off my react native skills
            in my resume. The data source is woo-commerce by WordPress which is
            connected to the application my mean of graph-QL. It supports
            authentication utilizing JWT, Browses by filter, order creation,
            product listing, category listing, cart, and has over 100 stars on
            Github.
          </p>
        </div>
        <div className={"px-10 pt-5"}>
          <p className={"text-gray-100	text-lg font-extralight	"}>
            Accounting Software -{" "}
          </p>
          <p className={"text-gray-400	text-basic font-extralight	"}>
            At the start of my career I was tasked to create an accounting
            system over PHP, and I later made it open-source, and migrate it
            from a core-PHP to Laravel. The System contains mostly all kinds of
            features like accounts, ledgers, purchase orders, vouchers, and
            invoices. The database that is being used is MySQL and is completely
            open-source for anyone to use.
          </p>
        </div>
        <div className={"px-10 pt-5"}>
          <p className={"text-gray-100	text-lg font-extralight	"}>
            Easy Woo Cart -
          </p>
          <p className={"text-gray-400	text-basic font-extralight	"}>
            A Simple plugin that lets you add products to your woo-commerce cart
            directly from the URL. It replicates the working flow of Shopify and
            it can be used in storefronts.
          </p>
        </div>
        <div className={"px-10 pt-5"}>
          <p className={"text-gray-100	text-lg font-extralight	"}>
            Electron-Based Browser -
          </p>
          <p className={"text-gray-400	text-basic font-extralight	"}>
            open-source project created with Electron + React, a browser with
            all the basic browser navigation and tabs like control.
          </p>
        </div>
        <div className={"px-10 pt-5"}>
          <p className={"text-gray-100	text-lg font-extralight	"}>
            Real-time Location tracking -
          </p>
          <p className={"text-gray-400	text-basic font-extralight	"}>
            Another open-source flutter and java based project that is
            integrated with firebase to track-realtime location tracking.
            Initially, it was first created on java, it contains 2 apps, one is
            for the client and the other one is for the vendor that needed to be
            tracked, backed it used firebase to communicated and update
            real-time location in DB.
          </p>
        </div>
      </div>
    </div>
  );
}
