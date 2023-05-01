
import React, { useState, useCallback } from 'react';
import {Text, TextInput, View, Pressable, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownStyles from '../Styles/DropdownStyles';
import regions from '../json/regions';
import TypeTranslations from '../json/TypeTranslations';
import FilterTranslations from '../json/FilterTranslations';
import ButtonStyles from '../Styles/ButtonStyles';

//SearchBox luodaan hakusivulle, tällä voidaan hakea kirjoittamalla, alueen, tyypin ja järjestyksen mukaan.
export default function SearchBox({ navigation, getData }) {

    const [page, setPage] = useState(1);
    const [region, setRegion] = useState('');
    const [type, setType] = useState('');
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState('1')
    const [openRegion, setOpenRegion] = useState(false);
    const [openType, setOpenType] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

    //kutsutaan MainPage sivulla olevaa getData funktiota
    const search = async (type, region, filter, page, searchText) => {
        getData(type, region, filter, page, searchText)
            setPage(1)          
    }

    //Nämä aukoo ja sulkee vain Yhden pudotuslistan kerrallaan.
    const onOpenRegion = useCallback(() => {
        setOpenType(false);
        setOpenFilter(false);
        setOpenRegion(true);
    }, []);
    const onTypeOpen = useCallback(() => {
        setOpenRegion(false);
        setOpenFilter(false);
        setOpenType(true);
    }, []);
    const onFilterOpen = useCallback(() => {
        setOpenRegion(false);
        setOpenType(false);
        setOpenFilter(true);
    }, []);

    //Tässä suoritetaan käännöksiä halutulle kielelle
    const handleTypeChange = (selectedType) => {
        setType(selectedType);
    };
    const getTranslatedType = (typeValue, language) => {
        return TypeTranslations[language].type[typeValue];
    };

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };
    const getTranslatedFilter = (filterValue, language) => {
        return FilterTranslations[language].filter[filterValue];
    };

    return (

        <View style={Styles.searchBoxContainer}>
            <View style={Styles.searchBoxContainer2}>
                <TextInput                                                              //käsin haku
                    style={Styles.textInputContainer1}
                    placeholder="Syötä hakusana"
                    onChangeText={(text => setSearchText(text))}
                    returnKeyType='search'
                />
                <Pressable style={ButtonStyles.buttonSearch}                            //kutsutaan searh funktiota
                    onPress={(() => search(type, region, filter, page, searchText))}
                >
                    <Text style={ButtonStyles.buttonText}>Hae</Text>
                </Pressable>
            </View>
            <View style={Styles.searchButtonContainer}>
                <View style={DropdownStyles.dropDawnList}>
                    <DropDownPicker                                 //tässä valitaan alue hakuavarten
                        style={DropdownStyles.dropDawn}
                        placeholder="Alue"
                        listMode="MODAL"
                        searchable={true}
                        dropDownDirection="AUTO"
                        dropDownContainerStyle={{
                            backgroundColor: "#dfdfdf",
                            borderColor: '#25db55',
                            borderRadius: 12,
                        }}
                        open={openRegion}
                        onOpen={onOpenRegion}
                        onClose={() => setOpenRegion(false)}
                        items={[
                            {
                                value: "all",
                                label: "Kokosuomi",
                            },
                            ...Object.keys(regions).map((item, index) => ({
                                value: item,
                                label: item,
                            })),
                        ]}
                        value={region}
                        setValue={setRegion}
                    />
                </View>
                <View style={DropdownStyles.dropDawnList}>
                    <DropDownPicker                                 //tässä valitaan ilmoituksen tyyppi hakua varten
                        style={DropdownStyles.dropDawn}
                        placeholder={getTranslatedType("all", "fi")} // example usage of translation function
                        listMode="SCROLLVIEW"
                        dropDownDirection="DOWN"
                        dropDownContainerStyle={{
                            backgroundColor: "white",
                            borderColor: "#25db55",
                            borderRadius: 12,
                        }}
                        open={openType}
                        onOpen={onTypeOpen}
                        onClose={() => setOpenType(false)}
                        value={type}
                        setValue={handleTypeChange}
                        items={Object.keys(TypeTranslations["en"].type).map((item) => ({
                            value: item,
                            label: getTranslatedType(item, "fi"), // example usage of translation function
                        }))}
                    />
                </View>
                <View style={DropdownStyles.dropDawnList}>
                    <DropDownPicker                                     //tässä valitaan tapa jolla ilmoitukset järjestellään
                        style={DropdownStyles.dropDawn}
                        placeholder={getTranslatedFilter("1", "fi")} // example usage of translation function
                        listMode="SCROLLVIEW"
                        dropDownDirection="DOWN"
                        dropDownContainerStyle={{
                            backgroundColor: "white",
                            borderColor: "#25db55",
                            borderRadius: 12,
                        }}
                        open={openFilter}
                        onOpen={onFilterOpen}
                        onClose={() => setOpenFilter(false)}
                        value={filter}
                        setValue={handleFilterChange}
                        items={Object.keys(FilterTranslations["en"].filter).map((item) => ({
                            value: item,
                            label: getTranslatedFilter(item, "fi"), // example usage of translation function
                        }))}
                    />
                </View>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    searchBoxContainer: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#25db55',
        borderRadius: 12,
        elevation: 10,
        zIndex: 10,
    },
    searchBoxContainer2: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,

    },
    textInputContainer1: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 5,
        marginRight: 10,
    },
    searchButtonContainer: {
        flexDirection: 'row',
    },
});