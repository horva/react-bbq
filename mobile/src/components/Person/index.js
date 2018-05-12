import React from 'react';
import { View, Text } from 'react-native';

const Person = (props) => (
    <View>
        <Text>
            {props.name}
        </Text>
    </View>
)

export default Person;
