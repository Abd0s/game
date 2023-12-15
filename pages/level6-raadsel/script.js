const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.21903594933564, 4.401590851880506'
  const locationName = 'Groenplaats';
  const nextPage = 'stop7';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}


function Level6CodeALaTopia() {
  return (
    <Frame
      name="Level6CodeALaTopia"
      fill="#FFF"
      width={414}
      height={736}
    >
      <Image
        name="Achtergrond"
        width={414}
        height={736}
        src="<Add image URL here>"
      />
      <Rectangle
        name="Rectangle 6"
        effect={{
          type: "drop-shadow",
          color: "#C7A781",
          offset: {
            x: 0,
            y: 4,
          },
          blur: 4,
          showShadowBehindNode:
            false,
        }}
        x={{
          type: "center",
          offset: 0,
        }}
        y={213}
        fill="#EADEC5"
        cornerRadius={30}
        width={310}
        height={284}
      />
      <Image
        name="Rozenkruisersgeheimschrift-1024x576-removebg-preview 1"
        x={{
          type: "center",
          offset: 0,
        }}
        y={{
          type: "center",
          offset: -13.5,
        }}
        width={290}
        height={253}
        src="<Add image URL here>"
      />
      <Text
        name="LEVEL 6"
        effect={{
          type: "drop-shadow",
          color: "#00000040",
          offset: {
            x: 0,
            y: 4,
          },
          blur: 4,
          showShadowBehindNode:
            false,
        }}
        x={{
          type: "center",
          offset: 0,
        }}
        y={40}
        fill="#EADEC5"
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={40}
        letterSpacing={3.2}
      >
        LEVEL 6
      </Text>
      <Frame
        name="Group 1"
        x={152}
        y={527}
        strokeWidth={0}
        overflow="visible"
        width={110}
        height={44}
      >
        <Rectangle
          name="Rectangle 7"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 8"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={39}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 9"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={78}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
      </Frame>
      <Frame
        name="Group 2"
        x={152}
        y={585}
        strokeWidth={0}
        overflow="visible"
        width={110}
        height={44}
      >
        <Rectangle
          name="Rectangle 12"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 13"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={39}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 14"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={78}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
      </Frame>
      <Frame
        name="Group 3"
        x={35}
        y={643}
        strokeWidth={0}
        overflow="visible"
        width={344}
        height={44}
      >
        <Rectangle
          name="Rectangle 18"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={39}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 27"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 19"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={78}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 20"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={117}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 21"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={156}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 22"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={195}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 23"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={234}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 24"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={273}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 25"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={312}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 26"
          effect={{
            type: "drop-shadow",
            color:
              "#00000040",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          }}
          x={312}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
      </Frame>
      <Rectangle
        name="Rectangle 3"
        effect={{
          type: "drop-shadow",
          color: "#00000040",
          offset: {
            x: 0,
            y: 4,
          },
          blur: 4,
          showShadowBehindNode:
            false,
        }}
        x={{
          type: "center",
          offset: 0.5,
        }}
        y={97}
        fill="#EADEC5"
        cornerRadius={10}
        width={227}
        height={86}
      />
      <Text
        name="Ontgrendel de lettercode"
        x={{
          type: "center",
          offset: 0.5,
        }}
        y={97}
        fill="#745E48"
        width={183}
        height={86}
        verticalAlignText="center"
        horizontalAlignText="center"
        lineHeight="120%"
        fontFamily="Luckiest Guy"
        fontSize={24}
        letterSpacing={0.96}
      >
        Ontgrendel de
        lettercode
      </Text>
    </Frame>
  );
}
