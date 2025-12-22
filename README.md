# personal homepage

built with [sveltekit](https://kit.svelte.dev/), hosted on [vercel](https://vercel.com)

## Development

Start the development server:

```bash
npm run dev
```

## Building

To create a production version of the app:

```bash
npm run build
```

The build output will be in the `build` directory.

## Publishing to GitHub Pages

There are two ways to publish to GitHub Pages.

### Method 1: Using `gh-pages` branch

The project is configured to deploy the `build` directory to the `gh-pages` branch.

```bash
npm run deploy
```

### Method 2: Using `docs` folder on `main` branch

The `Makefile` is configured to build the project and move the artifacts to the `docs` folder.

```bash
make deploy
```

This will build the project and copy the necessary files to the `docs` directory, from which you can serve your GitHub Pages site.