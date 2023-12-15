const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.228566134578784, 4.404279702299842'
  const locationName = 'Bonapartedok';
  const nextPage = 'stop4';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}


function Level3Rebus() {
  return (
    <Frame
      name="Level3Rebus"
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
      <Text
        name="LEVEL 3"
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
        LEVEL 3
      </Text>
      <Frame
        name="Group 5"
        x={74}
        y={537}
        strokeWidth={0}
        overflow="visible"
        width={266}
        height={105}
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
          y={61}
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
          y={61}
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
          y={61}
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
          y={61}
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
          y={61}
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
          x={195}
          y={61}
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
          x={234}
          y={61}
          fill="#EADEC5"
          cornerRadius={10}
          width={32}
          height={44}
        />
        <Rectangle
          name="Rectangle 30"
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
          name="Rectangle 31"
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
          name="Rectangle 32"
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
          name="Rectangle 33"
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
          name="Rectangle 34"
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
      <Image
        name="image 20"
        x={273}
        y={249}
        width={69}
        height={68}
        src="<Add image URL here>"
      />
      <Image
        name="image 19"
        x={145}
        y={251}
        width={116}
        height={74}
        src="<Add image URL here>"
      />
      <Image
        name="image 18"
        x={46}
        y={216}
        width={85}
        height={113}
        src="<Add image URL here>"
      />
      <Image
        name="image 17"
        x={55}
        y={371}
        width={91}
        height={64}
        src="<Add image URL here>"
      />
      <Image
        name="image 15"
        x={152}
        y={367}
        width={80}
        height={86}
        src="<Add image URL here>"
      />
      <Image
        name="image 16"
        x={258}
        y={373}
        width={100}
        height={52}
        src="<Add image URL here>"
      />
      <Text
        name="+"
        x={49}
        y={273}
        fill="#482E19"
        width={192}
        height={16}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        +
      </Text>
      <Text
        name="-N"
        x={4}
        y={446}
        fill="#482E19"
        width={192}
        height={15}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        -N
      </Text>
      <Text
        name="-OX"
        y={339}
        fill="#482E19"
        width={191}
        height={15}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        -OX
      </Text>
      <Text
        name="-ik"
        x={101}
        y={339}
        fill="#482E19"
        width={192}
        height={15}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        -ik
      </Text>
      <Text
        name="+"
        x={152}
        y={396}
        fill="#482E19"
        width={191}
        height={15}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        +
      </Text>
      <Text
        name="+"
        x={160}
        y={273}
        fill="#482E19"
        width={192}
        height={16}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        +
      </Text>
      <Text
        name="-AM"
        x={101}
        y={446}
        fill="#482E19"
        width={192}
        height={15}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        -AM
      </Text>
      <Text
        name="-NET -F"
        x={204}
        y={339}
        fill="#482E19"
        width={191}
        height={15}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        -NET -F
      </Text>
      <Text
        name="M=H"
        x={203}
        y={447}
        fill="#482E19"
        width={191}
        height={15}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        M=H
      </Text>
      <Text
        name="+"
        x={49}
        y={396}
        fill="#482E19"
        width={192}
        height={15}
        horizontalAlignText="center"
        fontFamily="Luckiest Guy"
        fontSize={24}
      >
        +
      </Text>
      <Text
        name="MAak de rebus"
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
        MAak de rebus
      </Text>
    </Frame>
  );
}