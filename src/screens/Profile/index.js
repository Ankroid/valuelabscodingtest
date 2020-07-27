import React from 'react';
import {
    View,
    FlatList,
    StatusBar,
    Text,
    Switch,
    ScrollView,
} from 'react-native';
import Header from '../../components/HeaderComponent';
import { connect } from 'react-redux';
import styles from './styles'
import CardComponent from '../../components/CardComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import { bindActionCreators } from "redux";
import * as fetchDataActions from '../../reducers/profile/actions';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profileData: [
                {
                    "title": "Objective",
                    "details": 'Seeking a position where I can utilize my knowledge, abilities and personal skills while being resourceful, innovative and flexible that offers professional growth along with the organization. It would be my never ending dedication to maintain the spectrum of integrity, honesty & character.',
                    "image": 'object-group',
                    "isLiked": false,
                    "isLikedIconVisible": true
                },
                {
                    "title": "Experience",
                    "details": 'A Mobile & Web Application Developer with nearly 6 years of experience Software Development, Application Maintenance & Support and Project Execution. 3+ year experience in Mobile application Development and 2.5+ years in React Native development',
                    "image": 'library-books',
                    "isLiked": false,
                    "isLikedIconVisible": true
                },
                {
                    "title": "Projects",
                    "details": 'A Mobile & Web Application Developer with nearly 6 years of experience Software Development, Application Maintenance & Support and Project Execution. 3+ year experience in Mobile application Development and 2.5+ years in React Native development',
                    "image": 'library-books',
                    "isLiked": false,
                    "isLikedIconVisible": true
                },
                {
                    "title": "Education",
                    "details": 'A Mobile & Web Application Developer with nearly 6 years of experience Software Development, Application Maintenance & Support and Project Execution. 3+ year experience in Mobile application Development and 2.5+ years in React Native development',
                    "image": 'library-books',
                    "isLiked": false,
                    "isLikedIconVisible": true
                },
                {
                    "title": "Hobbies",
                    "details": 'Traveling, Music, Cooking, Sports and Exercise, Games',
                    "image": 'library-books',
                    "isLiked": false,
                    "isLikedIconVisible": true
                },
                {
                    "title": "References",
                    "details": 'A Senior Software Developer',
                    "image": 'library-books',
                    "isLiked": false,
                    "isLikedIconVisible": true
                },

            ],
            likedData: [],
            apiData: []
        };
    }

    async componentDidMount() {
        const { FetchData } = this.props;
        try {
            await FetchData.getData();
        } catch (e) { console.log(e) }
    }

    componentWillReceiveProps(nextProps) {
        const { apiData } = this.props
        if (nextProps.apiData !== apiData) {
            nextProps.apiData.data.map(item => {
                item.title = item.first_name + item.last_name,
                    item.details = item.email
            })
            this.setState({ apiData: nextProps.apiData.data })
        }
    }

    _removelikeButton = () => {
        let { likedData, profileData } = this.state;
        let new_state = Object.assign({}, likedData);
        alert(JSON.stringify(new_state))
        // new_state.map(item=>item.isLikedIconVisible=false)
        // this.setState({likedData:new_state})
        //this.setState({ likedData })
    }

    _onSelectSwitch = (value, index) => {
        let { profileData, likedData } = this.state;
        profileData[index].isLiked = value;
        this.setState({ profileData, likedData: profileData.filter(item => item.isLiked) })
    }

    _renderIcon = (item) => {
        switch (item) {
            case "Objective":
                return <FontAwesome name='object-group' size={20} />;
            case "Experience":
                return <FontAwesome name='trophy' size={20} />;
            case "Projects":
                return <FontAwesome5 name='project-diagram' size={20} />;
            case "Education":
                return <MaterialIcons name='library-books' size={20} />;
            case "Hobbies":
                return <MaterialIcons name='gamepad' size={20} />;
            case "References":
                return <MaterialIcons name='bookmark-border' size={20} />;
            default:
                break;
        }
    }

    _renderItems = ({ item, index }) => {
        var isEnabled = item.isLiked;
        return (
            <View style={styles.itemContStyle} >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {
                        this._renderIcon(item.title)
                    }
                    <Text style={styles.itemTitleStyle}>
                        {item.title}</Text>
                    {
                        item.isLikedIconVisible && <Switch
                            style={{ position: 'absolute', right: 0 }}
                            trackColor={{ false: "#0000001A", true: "#00000066" }}
                            thumbColor={isEnabled ? "#000" : "#DCDCDC"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={value => this._onSelectSwitch(value, index)}
                            value={isEnabled} />
                    }
                </View>
                <Text style={styles.itemDetailStyle}>{item.details}</Text>
            </View>
        )
    }

    render() {
        const { likedData } = this.state
        const { isLoading } = this.props
        return (
            <View style={styles.mainContainerStyle}>
                <StatusBar backgroundColor='blue' barStyle='light-content' />
                <Header text="Profile" />
                <ScrollView>
                    <CardComponent style={styles.cardStyle} cornerRadius={10}>
                        <Text style={styles.titleTextStyle}>
                            Ankur Badola
                     </Text>
                        <Text style={styles.titleSubHeadingStyle}>
                            ankurbadola01@gmail.com
                            </Text>
                        <Text style={styles.titleSubHeadingStyle}>
                            +918800234948
                      </Text>
                        <View style={{ marginTop: 20 }}>
                            <FlatList
                                data={this.state.profileData}
                                keyExtractor={(item) => item.id}
                                extraData={this.state}
                                renderItem={this._renderItems}
                                showsVerticalScrollIndicator={false} />
                        </View>
                    </CardComponent>
                    {
                        likedData.length > 0 && <CardComponent style={styles.cardStyle} cornerRadius={10}>
                            <Text style={[styles.titleTextStyle, { marginTop: 5 }]}>
                                Like/Dislike Summary
                       </Text>
                            <View style={{ marginTop: 20 }}>
                                <FlatList
                                    data={this.state.likedData}
                                    keyExtractor={(item) => item.id}
                                    extraData={this.state}
                                    renderItem={this._renderItems}
                                    showsVerticalScrollIndicator={false} />
                            </View>
                        </CardComponent>
                    }
                    <CardComponent style={styles.cardStyle} cornerRadius={10}>
                        <Text style={[styles.titleTextStyle, { marginTop: 5 }]}>
                            Data from API
                       </Text>
                        <View style={{ marginTop: 20 }}>
                            <FlatList
                                data={this.state.apiData}
                                keyExtractor={(item) => item.id}
                                extraData={this.state}
                                renderItem={this._renderItems}
                                showsVerticalScrollIndicator={false} />
                        </View>
                    </CardComponent>
                </ScrollView>
                <Spinner
                    visible={isLoading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
            </View>
        )
    }
}

export default connect(
    (state) => ({
        isLoading: state.profile.pending,
        isSuccess: state.profile.success,
        isError: state.profile.error,
        apiData: state.profile.apiData
    }),
    (dispatch) => ({
        FetchData: bindActionCreators(fetchDataActions, dispatch),
    })
)(Profile);

