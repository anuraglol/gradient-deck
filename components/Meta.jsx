import Head from "next/head";

function Meta() {
  return (
    <Head>
      <title>Gradient Deck - Find Awesome Gradients!!</title>
      <link rel="manifest" href="./manifest.json" />
      <meta
        name="description"
        content="Gradient-Deck, a place to find curated awesome gradients!!"
      />
      <link
        rel="shortcut icon"
        href="./assests/favicon.ico"
        type="image/x-icon"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Delius+Swash+Caps:regular"
        rel="stylesheet"
      />

      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,900,900italic" rel="stylesheet" />
    </Head>
  );
}

export default Meta;
