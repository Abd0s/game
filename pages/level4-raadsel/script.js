const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.217425023733796, 4.4212135010110565'
  const locationName = 'Antwerpen Centraal Station';
  const nextPage = 'stop5';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}


function Level4Raadsel() {
  return (
    <Frame
      name="Level4Raadsel"
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
      <Text
        name="LEVEL 4"
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
        LEVEL 4
      </Text>
      <Text
        name="-"
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
          offset: -78,
        }}
        y={612}
        fill="#EADEC5"
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={40}
        letterSpacing={3.2}
      >
        -
      </Text>
      <Rectangle
        name="Rectangle 5"
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
      <Frame
        name="Group 11"
        x={35}
        y={538}
        strokeWidth={0}
        overflow="visible"
        width={345}
        height={44}
      >
        <Rectangle
          name="Rectangle 6"
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
          x={156}
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
          x={195}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
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
          x={235}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 10"
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
          x={274}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 11"
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
          x={313}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
      </Frame>
      <Frame
        name="Group 12"
        x={152}
        y={599}
        strokeWidth={0}
        overflow="visible"
        width={110}
        height={44}
      >
        <Rectangle
          name="Rectangle 16"
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
          name="Rectangle 17"
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
          x={78}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
      </Frame>
      <Text
        name="Los het raadsel op!"
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
        Los het raadsel op!
      </Text>
      <Text
        name="Waar de Schelde stroomt en de schepen aanmeren,Een historisch dok met een naam die herinnert aan keizerlijk begeren. Waar ben ik?"
        x={{
          type: "center",
          offset: 0.5,
        }}
        y={213}
        fill="#000"
        width={275}
        height={284}
        verticalAlignText="center"
        horizontalAlignText="center"
        lineHeight="160%"
        fontFamily="Luckiest Guy"
        fontSize={18}
        letterSpacing={1.08}
      >
        Waar de Schelde
        stroomt en de schepen
        aanmeren, Een
        historisch dok met een
        naam die herinnert aan
        keizerlijk begeren.
        Waar ben ik?
      </Text>
    </Frame>
  );
}