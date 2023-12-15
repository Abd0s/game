const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.22912985987149, 4.404896216569015'
  const locationName = 'Museum Aan Stroom';
  const nextPage = 'stop2';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}

function Level1Raadsel() {
  return (
    <Frame
      name="Level1Raadsel"
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
        name="LEVEL 1"
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
        LEVEL 1
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
        name="Group 10"
        x={133}
        y={527}
        strokeWidth={0}
        overflow="visible"
        width={149}
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
          x={117}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
      </Frame>
      <Frame
        name="Group 8"
        x={113}
        y={585}
        strokeWidth={0}
        overflow="visible"
        width={188}
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
          x={78}
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
          x={39}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
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
          x={117}
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
          x={156}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
      </Frame>
      <Frame
        name="Group 9"
        x={113}
        y={643}
        strokeWidth={0}
        overflow="visible"
        width={188}
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
          x={39}
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
          x={78}
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
          x={117}
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
          x={156}
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
        name="Waar groen en recreatie samenkomen in één lijn.Een voormalig spoorwegterrein, nu een park heel groot,Waar ben je als je dit raadsel oplost, denk groot?"
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
        Waar groen en
        recreatie samenkomen
        in één lijn. Een
        voormalig
        spoorwegterrein, nu
        een park heel groot,
        Waar ben je als je dit
        raadsel oplost, denk
        groot?
      </Text>
    </Frame>
  );
}