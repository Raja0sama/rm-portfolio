# Portfolio - Open-source Project

<a href="https://imgur.com/O9nRtNl"><img style="height:500px" src="https://i.imgur.com/O9nRtNl.gif" title="source: imgur.com" /></a>

The purpose of the project is to provide an open-source portfolio for the developers. A Simple Clean design made with React JS, Tailwind, Three Js, maximo, Vercel, and The model used with in the project is by <a href="http://readyplayer.me/" >Ready Player</a>.

Create awesome looking Portfolio and show case your work, because as a developer/designer we have to keep growing in all aspect of the life.

<a href="https://rajaosama.me/"><img style="height:500px" src="https://i.imgur.com/PTHNLBK.gif" title="source: imgur.com" /></a>
You can visit the Live Website by clicking on the above GIF video.

## Modules

- System Include Home Introduction
- System Include Chill and relaxing music
- Includes About Section
- Quickly Accessible Social-Media Links
- Futuristic Resume
- Work Display
- Work Sections
- Dynamic Work pages
- Contact Page.

## Getting Started

- Make sure you have node v14, since the project was built with node version 14.

```
git clone https://github.com/Raja0sama/rm-portfolio.git
cd rm-portfolio

code .
yarn start | npm start
```

### Model

To Create your very own 3d avatar there are few steps that you will have to do, a bit complicated but once you done with the steps, it will look just awesome.

- Step 1 : Go to <a href="http://readyplayer.me/" >Ready Player</a> and Registered to there website.
- Step 2 : Once given the access , create a full body avatar, they will guide you how to create it with the webcam.
- Step 3 : Have your model downloaded, which can be downloaded from Home Page, left side of Customize Look.
- Step 4 : Have Blender Downloaded 😂
- Step 5 : <a href="http://readyplayer.me/" >Watch This video</a> to attach the animation to your model. and in the end export it as GLB file.
- Step 6 : Once you have model.glb file ready, Drag it in to public folder and replace it with existing one and from the terminal `cd public && npx gltfjsx model.glb`
- Step 7 : That will create a model.js file for you, drag it to components/avatar, before you do that make sure you copy this code

```
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
  materials.castShadow = true;
  materials.receiveShadow = true;
  if (materials?.material?.map) materials.material.map.anisotropy = 16;
  actions["idle.001"]?.play();
  }, []);

```

In the model.js file, look at the existing one to understand what is happening, basically we are triggering animation to play on mount.

Or

Just hide the model by going into `Page/Home` and with in Home Object, look for the property `showModel` and set it false.

### Content of the Website

To Modify content of the overall site, kindly visit `src/portfolio_static` and there will be portfolio Object that contain Objects with the name of the page and a layout.

## Deployment

You can use Vercel to deploy the site easily by using `npx vercel --prod`

## TODO

- Server Side Rendering for better SEO
- Blogging System Integrated with Firebase and SSR
- Better Interaction and Animation of the overall site.

## Contribution

You are welcome to contribute to the project, Fork the repo and make a pull request with detail description. Obviously the structure of the website need to be consistent, but you are welcome to open up a pull request with the changes you hope to see in the repo.

## Thank You.
