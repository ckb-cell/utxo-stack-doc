"use strict";(self.webpackChunkutxo_stack_website=self.webpackChunkutxo_stack_website||[]).push([[51],{3340:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=t(4848),n=t(8453);const s={sidebar_position:9},l="Glossary",c={id:"glossary",title:"Glossary",description:"RGB++ layer",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/glossary.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/security"}},r={},o=[{value:"RGB++ layer",id:"rgb-layer",level:3},{value:"RGB++ assets",id:"rgb-assets",level:3},{value:"RGB++ assets leap protocol",id:"rgb-assets-leap-protocol",level:3},{value:"Client-side verification proof",id:"client-side-verification-proof",level:3},{value:"DA layer / DA chain",id:"da-layer--da-chain",level:3},{value:"DA validator",id:"da-validator",level:3},{value:"DA light client (RGB++ contract)",id:"da-light-client-rgb-contract",level:3},{value:"DA light client node",id:"da-light-client-node",level:3},{value:"App chain",id:"app-chain",level:3},{value:"App chain validator",id:"app-chain-validator",level:3},{value:"App chain light client (RGB++ contract)",id:"app-chain-light-client-rgb-contract",level:3},{value:"Challenge Period",id:"challenge-period",level:3},{value:"Chain state challenge",id:"chain-state-challenge",level:3},{value:"RGB++ DA exit challenge",id:"rgb-da-exit-challenge",level:3}];function h(e){const a={a:"a",h1:"h1",h3:"h3",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"glossary",children:"Glossary"}),"\n",(0,i.jsx)(a.h3,{id:"rgb-layer",children:"RGB++ layer"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://github.com/ckb-cell/RGBPlusPlus-design/blob/main/docs/light-paper-en.md",children:"RGB++"})," is a protocol that uses single-use seals and client-side validation techniques to manage state changes and transaction verification."]}),"\n",(0,i.jsx)(a.p,{children:"In the UTXO stack, the RGB++ layer serves as the contract layer, resolving challenge disputes, validator elections, and staking."}),"\n",(0,i.jsx)(a.h3,{id:"rgb-assets",children:"RGB++ assets"}),"\n",(0,i.jsx)(a.p,{children:"RGB++ assets are an extended assets protocol deployed on the RGB++ layer. It supports cross-chain asset transfer via client-side verification without centralized bridges."}),"\n",(0,i.jsx)(a.h3,{id:"rgb-assets-leap-protocol",children:"RGB++ assets leap protocol"}),"\n",(0,i.jsx)(a.p,{children:"A permissionless, secure, and decentralized cross-chain protocol to move assets across RGB++ compatible chains."}),"\n",(0,i.jsx)(a.h3,{id:"client-side-verification-proof",children:"Client-side verification proof"}),"\n",(0,i.jsx)(a.p,{children:"Client-side verification is an RGB++ feature."}),"\n",(0,i.jsx)(a.p,{children:"Client-side verification proof is composed of a series of UTXO transactions and Merkle proofs. With the proof, the validity of transactions can be verified in an independent context. For example, a client-side verification proof can be generated from an App chain and verified in an RGB++ contract."}),"\n",(0,i.jsx)(a.h3,{id:"da-layer--da-chain",children:"DA layer / DA chain"}),"\n",(0,i.jsx)(a.p,{children:"Data availability layer or Data availability chain. The DA chain is an infrastructure that solves data availability problems in the UTXO stack."}),"\n",(0,i.jsx)(a.p,{children:"The DA chain provides a set of interfaces to support data storage, data retrieval, and data proof. The DA chain's consensus guarantees that the DA layer nodes keep submitted data for at least one Challenge Period duration."}),"\n",(0,i.jsx)(a.h3,{id:"da-validator",children:"DA validator"}),"\n",(0,i.jsx)(a.p,{children:"A DA chain validator who has a stake in the DA staking contract. A validator has the chance to participate in the consensus of a block by signing. A validator's stake will be slashed if they sign an invalid block."}),"\n",(0,i.jsx)(a.h3,{id:"da-light-client-rgb-contract",children:"DA light client (RGB++ contract)"}),"\n",(0,i.jsx)(a.p,{children:"A DA chain light client contract deployed on the RGB++ layer. RGB++ contracts can access the DA light client to prove data is submitted to the DA chain."}),"\n",(0,i.jsx)(a.h3,{id:"da-light-client-node",children:"DA light client node"}),"\n",(0,i.jsx)(a.p,{children:"A DA chain light client node can verify DA chain blocks with high confidence by using the data availability sampling protocol."}),"\n",(0,i.jsx)(a.h3,{id:"app-chain",children:"App chain"}),"\n",(0,i.jsx)(a.p,{children:"An app chain is a layer-2 rollup chain that maintains a chain state contract on the RGB++ layer. A challenge of invalid layer-2 state can be sent from the RGB++ layer."}),"\n",(0,i.jsx)(a.h3,{id:"app-chain-validator",children:"App chain validator"}),"\n",(0,i.jsx)(a.p,{children:"An App chain validator who has a stake in the App chain staking contract. A validator has the chance to participate in the consensus of a block by signing. A validator's stake will be slashed if they sign an invalid block."}),"\n",(0,i.jsx)(a.h3,{id:"app-chain-light-client-rgb-contract",children:"App chain light client (RGB++ contract)"}),"\n",(0,i.jsx)(a.p,{children:"An App chain light client deployed on the RGB++ layer. RGB++ contracts can access the light client to prove the App chain's state."}),"\n",(0,i.jsx)(a.h3,{id:"challenge-period",children:"Challenge Period"}),"\n",(0,i.jsx)(a.p,{children:"The challenge period is a window of time during which a layer-2 block can be challenged. After the Challenge Period, the layer-2 block is considered confirmed."}),"\n",(0,i.jsx)(a.h3,{id:"chain-state-challenge",children:"Chain state challenge"}),"\n",(0,i.jsx)(a.p,{children:"A staker can start a chain state challenge if they disagree with the DA chain or an app chain's chain state."}),"\n",(0,i.jsx)(a.p,{children:"A challenge proof contains an invalid transition and a Merkle proof. The proof can be verified on the RGB++ layer. The contract guarantees that the failed party loses their stake."}),"\n",(0,i.jsx)(a.p,{children:"When under a DA attack, there may not be enough data to construct such a proof. In such a situation, see DA exit challenge."}),"\n",(0,i.jsx)(a.h3,{id:"rgb-da-exit-challenge",children:"RGB++ DA exit challenge"}),"\n",(0,i.jsx)(a.p,{children:"When an App chain is under a DA attack, an asset holder can start an asset attestation by providing a client-side verification proof (the proof is stored on the user's local device)."}),"\n",(0,i.jsx)(a.p,{children:"The asset attestation will be canceled if anyone submits a valid transaction that spends the UTXO (which means the asset holder is using an obsolete state). Otherwise, after the challenge period, the asset holder can mint the corresponding assets on the RGB++ layer. App chain validators must update the app chain states to reflect the DA exit."})]})}function d(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>c});var i=t(6540);const n={},s=i.createContext(n);function l(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);