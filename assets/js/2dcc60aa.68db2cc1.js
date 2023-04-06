(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5645],{7438:function(e,n,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var l=Object.getOwnPropertyDescriptor(n,t);l&&!("get"in l?!n.__esModule:l.writable||l.configurable)||(l={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,l)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),l=this&&this.__exportStar||function(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||r(n,e,t)};Object.defineProperty(n,"__esModule",{value:!0}),l(t(4322),n)},4322:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.autoDemoTree=n.shortTree=n.longTree=void 0;var t=function(e,n){void 0===n&&(n={items:{}});for(var r=0,l=Object.entries(e);r<l.length;r++){var o=l[r],i=o[0],a=o[1];n.items[i]={index:i,canMove:!0,isFolder:null!==a,children:null!==a?Object.keys(a):void 0,data:i,canRename:!0},null!==a&&t(a,n)}return n};n.longTree=t({root:{Fruit:{Apple:null,Orange:null,Lemon:null,Berries:{Red:{Strawberry:null,Raspberry:null},Blue:{Blueberry:null},Black:{Blackberry:null}},Banana:null},Meals:{America:{SmashBurger:null,Chowder:null,Ravioli:null,MacAndCheese:null,Brownies:null},Europe:{Risotto:null,Spaghetti:null,Pizza:null,Weisswurst:null,Spargel:null},Asia:{Curry:null,PadThai:null,Jiaozi:null,Sushi:null},Australia:{PotatoWedges:null,PokeBowl:null,LemonCurd:null,KumaraFries:null}},Desserts:{Cookies:null,IceCream:null},Drinks:{PinaColada:null,Cola:null,Juice:null}}}),n.shortTree=t({root:{container:{item0:null,item1:null,item2:null,item3:{inner0:null,inner1:null,inner2:null,inner3:null},item4:null,item5:null}}}),n.autoDemoTree=t({root:{Fruit:{Apple:null,Orange:null,Lemon:null,Berries:{Strawberry:null,Blueberry:null},Banana:null},Meals:{America:{SmashBurger:null,Chowder:null,Ravioli:null,MacAndCheese:null,Brownies:null},Europe:{Risotto:null,Spaghetti:null,Pizza:null,Weisswurst:null,Spargel:null},Asia:{Curry:null,PadThai:null,Jiaozi:null,Sushi:null},Australia:{PotatoWedges:null,PokeBowl:null,LemonCurd:null,KumaraFries:null}},Desserts:{Cookies:null,IceCream:null},Drinks:{PinaColada:null,Cola:null,Juice:null}}})},7088:(e,n,t)=>{"use strict";t.d(n,{n:()=>l});var r=t(2784);const l=e=>{let{name:n}=e;const l=(e=>{const[n,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{let n=!1;return t(9351)(`./${e}.json`).then((e=>{n||(n=!0,l(e.default))})).catch(console.error),()=>{n=!0}}),[e]),n})(n);return l?r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default Value"),r.createElement("th",null,"Required"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(l).map((e=>{var n;return r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,r.createElement("code",null,null==(n=l[e].type)?void 0:n.name)),r.createElement("td",null,l[e].defaultValue&&r.createElement("code",null,l[e].defaultValue.value)),r.createElement("td",null,l[e].required?"Yes":"No"),r.createElement("td",null,l[e].description))})))):null}},1935:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(7896),l=(t(2784),t(876)),o=(t(7438),t(7088));const i={sidebar_position:3},a="Controlled Environment",s={unversionedId:"guides/controlled-environment",id:"guides/controlled-environment",title:"Controlled Environment",description:"A controlled environment provides more flexibility and more possibilities for customization, but",source:"@site/docs/guides/controlled-environment.mdx",sourceDirName:"guides",slug:"/guides/controlled-environment",permalink:"/docs/guides/controlled-environment",draft:!1,editUrl:"https://github.com/lukasbach/react-complex-tree/edit/main/packages/docs/docs/guides/controlled-environment.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom Data Provider",permalink:"/docs/guides/custom-data-provider"},next:{title:"Styling Customizability",permalink:"/docs/guides/styling"}},u={},d=[{value:"Managing the view state of the tree",id:"managing-the-view-state-of-the-tree",level:2},{value:"Lazy loading items",id:"lazy-loading-items",level:2},{value:"Component Props",id:"component-props",level:2}],m={toc:d};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"controlled-environment"},"Controlled Environment"),(0,l.kt)("p",null,"A controlled environment provides more flexibility and more possibilities for customization, but\nyou need to implement your own logic for managing and retaining the view state of each tree, i.e.\nwhich items are expanded, selected, focused etc."),(0,l.kt)("p",null,"Furthermore, you need to provide all items directly and, if not all items are available at the start,\nimplement custom logic to asynchronously load items if they need to be displayed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function App() {\n  return (\n    <ControlledTreeEnvironment items={longTree.items} getItemTitle={item => item.data} viewState={{}}>\n      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />\n    </ControlledTreeEnvironment>\n  );\n}\n')),(0,l.kt)("p",null,"As you can see from the example, you can focus the tree and even search for items, but not change\nthe focused or selected item."),(0,l.kt)("h2",{id:"managing-the-view-state-of-the-tree"},"Managing the view state of the tree"),(0,l.kt)("p",null,"To implement this, provide an implementation for the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TreeChangeHandlers"},"TreeChangeHandlers"),"\ninterface and provide it as spreaded props to the controlled environment, then provide a\n",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TreeViewState"},"viewState")," prop that defines the visual state of each tree by providing\na ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules#IndividualTreeViewState"},"individual viewState")," for every tree in your environment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function App() {\n  const [focusedItem, setFocusedItem] = useState();\n  const [expandedItems, setExpandedItems] = useState([]);\n  const [selectedItems, setSelectedItems] = useState([]);\n  return (\n    <ControlledTreeEnvironment\n      items={longTree.items}\n      getItemTitle={item => item.data}\n      viewState={{\n        [\'tree-2\']: {\n          focusedItem,\n          expandedItems,\n          selectedItems,\n        },\n      }}\n      onFocusItem={item => setFocusedItem(item.index)}\n      onExpandItem={item => setExpandedItems([...expandedItems, item.index])}\n      onCollapseItem={item =>\n        setExpandedItems(expandedItems.filter(expandedItemIndex => expandedItemIndex !== item.index))\n      }\n      onSelectItems={items => setSelectedItems(items)}\n    >\n      <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example" />\n    </ControlledTreeEnvironment>\n  );\n}\n')),(0,l.kt)("h2",{id:"lazy-loading-items"},"Lazy loading items"),(0,l.kt)("p",null,"As with the uncontrolled environment, you can provide an incomplete tree structure with\nmissing items that are referenced in other items as children. The ",(0,l.kt)("inlineCode",{parentName:"p"},"onMissingItems")," handler\nwill be invoked if an item is expanded whose children are not yet loaded, so you can\nimplement logic to load the items if that handler is invoked, and provide them alongside existing\nchildren in the next render iteration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const [focusedItem, setFocusedItem] = useState();\n  const [expandedItems, setExpandedItems] = useState([]);\n  return (\n    <ControlledTreeEnvironment\n      items={{\n        root: {\n          index: 'root',\n          canMove: true,\n          isFolder: true,\n          children: ['child1'],\n          data: 'Root item',\n          canRename: true,\n        },\n        child1: {\n          index: 'child1',\n          canMove: true,\n          isFolder: true,\n          children: ['child2'],\n          data: 'Child item',\n          canRename: true,\n        },\n      }}\n      getItemTitle={item => item.data}\n      viewState={{\n        ['tree-3']: {\n          focusedItem,\n          expandedItems,\n        },\n      }}\n      onFocusItem={item => setFocusedItem(item.index)}\n      onExpandItem={item => setExpandedItems([...expandedItems, item.index])}\n      onMissingItems={items => alert(`We should now load the items ${items.join(', ')}...`)}\n    >\n      <Tree treeId=\"tree-3\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </ControlledTreeEnvironment>\n  );\n}\n")),(0,l.kt)("h2",{id:"component-props"},"Component Props"),(0,l.kt)("p",null,"The props for the ",(0,l.kt)("inlineCode",{parentName:"p"},"ControlledTreeEnvironment")," are as follows:"),(0,l.kt)(o.n,{name:"ControlledTreeEnvironment",mdxType:"PropTable"}))}c.isMDXComponent=!0},876:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>p});var r=t(2784);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(t),p=l,v=c["".concat(s,".").concat(p)]||c[p]||m[p]||o;return t?r.createElement(v,i(i({ref:n},d),{},{components:t})):r.createElement(v,i({ref:n},d))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=c;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9351:(e,n,t)=>{var r={"./ControlledTreeEnvironment.json":[7847,7847],"./DragAndDropProvider.json":[4376,4376],"./DragBetweenLine.json":[3713,3713],"./EnvironmentActionsProvider.json":[2049,2049],"./InteractionManagerProvider.json":[7807,7807],"./LiveDescription.json":[7217,7217],"./MaybeLiveDescription.json":[6803,6803],"./SearchInput.json":[1364,1364],"./Tree.json":[1515,1515],"./TreeActionsProvider.json":[8868,8868],"./TreeItem.json":[3241,3241],"./TreeItemChildren.json":[4269,4269],"./TreeItemRenamingInput.json":[3954,3954],"./UncontrolledTreeEnvironment.json":[4054,4054],"./createDefaultRenderers.json":[5914,5914],"./plugin-route-context-module-100.json":[9124,8462]};function l(e){if(!t.o(r,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],l=n[0];return t.e(n[1]).then((()=>t.t(l,19)))}l.keys=()=>Object.keys(r),l.id=9351,e.exports=l}}]);