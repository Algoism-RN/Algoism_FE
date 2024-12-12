import { Modal, TouchableWithoutFeedback } from "react-native";
import { HintModalWrapper, HintModalContainer, HintArea } from "./styles";
import { Title, Answer } from "../String/String";
import { BlurView } from "expo-blur";
import { Gap } from "../../styles/category/Wrapper";

export const HintModal = ({ visible, setVisible, hint }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
    >
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <BlurView intensity={30} tint="default">
          <HintModalWrapper visible={visible}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <HintModalContainer>
                <Title text="Hint" />
                <Gap height="15px" />
                <HintArea>
                  <Answer text={hint} />
                </HintArea>
              </HintModalContainer>
            </TouchableWithoutFeedback>
          </HintModalWrapper>
        </BlurView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
